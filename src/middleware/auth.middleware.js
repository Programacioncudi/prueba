/**
 * Archivo: src/middleware/auth.middleware.js
 * Responsabilidad:
 *   - Validar el access token JWT en cada request protegida.
 *   - Adjuntar un objeto de usuario "sanitizado" a req.user.
 *   - Integrarse con el sistema de permisos (RBAC) a través de req.user.rol / req.user.permissions.
 *   - Proveer variantes:
 *       - authRequired: requiere token válido.
 *       - optionalAuth: permite continuar aunque no haya token.
 */

// src/middleware/auth.middleware.js
import { verifyAccessToken } from "../security/jwt.util.js";

const sanitizeJwtPayload = (payload) => ({
  id: payload.id,
  email: payload.email,
  rol: payload.rol,
});

const extractToken = (req) => {
  const auth = req.headers.authorization || "";
  const [scheme, token] = auth.split(" ");
  return scheme === "Bearer" ? token : null;
};

export const authRequired = (req, res, next) => {
  try {
    const token = extractToken(req);
    if (!token) {
      return res.status(401).json({ ok: false, error: "Token requerido" });
    }

    const payload = verifyAccessToken(token);
    req.user = sanitizeJwtPayload(payload);
    next();
  } catch (err) {
    return res
      .status(err.status || 401)
      .json({ ok: false, error: err.message || "Token inválido" });
  }
};

export const optionalAuth = (req, res, next) => {
  try {
    const token = extractToken(req);
    if (!token) {
      req.user = null;
      return next();
    }

    const payload = verifyAccessToken(token);
    req.user = sanitizeJwtPayload(payload);
    next();
  } catch {
    req.user = null;
    next();
  }
};
