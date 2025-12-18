// src/modules/auth/auth.controller.js
import bcrypt from "bcrypt";
import { Usuario } from "../rbac/rbac.models.js";
import { tokenService } from "../../security/token.service.js";

const sanitizeUser = (user) => ({
  id: user.id,
  email: user.email,
  nombre: user.nombre,
  estado: user.estado,
});

/**
 * POST /api/auth/register
 * Crea un usuario básico (para bootstrap / tests)
 */
export const register = async (req, res) => {
  try {
    const { email, password, nombre } = req.body;

    const existente = await Usuario.findOne({ where: { email } });
    if (existente) {
      return res
        .status(409)
        .json({ ok: false, error: "El email ya está registrado" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await Usuario.create({
      email,
      password: hashed,
      nombre,
      estado: "activo",
    });

    return res.status(201).json({
      ok: true,
      data: sanitizeUser(user),
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Error creando usuario",
    });
  }
};

/**
 * POST /api/auth/login
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usuario.findOne({
      where: { email, estado: "activo" },
      include: ["rol", "dominios"],
    });

    if (!user) {
      return res
        .status(401)
        .json({ ok: false, error: "Credenciales inválidas" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ ok: false, error: "Credenciales inválidas" });
    }

    // Payload para token
    const payload = {
      id: user.id,
      email: user.email,
      rol: user.rol?.nombre ?? null,
      dominios: user.dominios?.map((d) => d.nombre) ?? [],
    };

    const { access, refresh } = tokenService.generateTokenPair(payload);

    return res.json({
      ok: true,
      data: {
        user: sanitizeUser(user),
        accessToken: access,
        refreshToken: refresh,
      },
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Error en login",
    });
  }
};

/**
 * POST /api/auth/refresh
 */
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res
        .status(400)
        .json({ ok: false, error: "Refresh token requerido" });
    }

    const payload = tokenService.validateRefreshToken(refreshToken);

    const { access, refresh } = tokenService.generateTokenPair({
      id: payload.id,
      email: payload.email,
      rol: payload.rol,
      dominios: payload.dominios,
    });

    return res.json({
      ok: true,
      data: {
        accessToken: access,
        refreshToken: refresh,
      },
    });
  } catch (err) {
    return res.status(err.status || 401).json({
      ok: false,
      error: err.message || "Refresh token inválido",
    });
  }
};

/**
 * GET /api/auth/me
 * Requiere authRequired
 */
export const me = async (req, res) => {
  try {
    const user = await Usuario.findByPk(req.user.id, {
      include: ["rol", "dominios"],
    });

    if (!user) {
      return res.status(404).json({ ok: false, error: "Usuario no encontrado" });
    }

    return res.json({
      ok: true,
      data: {
        user: sanitizeUser(user),
        rol: user.rol?.nombre ?? null,
        dominios: user.dominios?.map((d) => d.nombre) ?? [],
      },
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Error obteniendo información del usuario",
    });
  }
};
