// src/middlewares/rbac.middleware.js
import jwt from "jsonwebtoken";
import { env } from "../config/env.config.js";
import { sequelize } from "../config/db.config.js";

const METHOD_TO_ACTION = {
  GET: "READ",
  POST: "CREATE",
  PUT: "UPDATE",
  PATCH: "UPDATE",
  DELETE: "DELETE",
};

function getModuleFromPath(req) {
  // /api/<module>/...
  const parts = req.path.split("/").filter(Boolean);
  // si tu basePath es /api, el módulo suele estar en parts[1] cuando usás app.use("/api", ...)
  // pero como montás /api/<module>, en routers req.baseUrl te ayuda
  const base = (req.baseUrl || "").split("/").filter(Boolean);
  return base[1] || base[0]; // cubre /api/<m> o /<m>
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ ok: false, error: "No autenticado" });

  try {
    req.user = jwt.verify(token, env.JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ ok: false, error: "Token inválido" });
  }
}

export function rbacEnforce({ allowPublicHealth = true } = {}) {
  return async (req, res, next) => {
    if (allowPublicHealth && req.path === "/health") return next();

    const moduleName = getModuleFromPath(req);
    if (!moduleName) return next(); // si no hay módulo, no imponemos

    const action = METHOD_TO_ACTION[req.method] || null;
    if (!action) return res.status(403).json({ ok: false, error: "Método no permitido" });

    const code = `${moduleName.toUpperCase()}:${action}`;

    // ADMIN bypass (si usás role en token)
    if (req.user?.role === "ADMIN") return next();

    // Consulta rápida: usuario → roles → permisos
    // Ajustá tablas/campos si difieren en tu DB
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ ok: false, error: "Token sin usuario" });

    const [rows] = await sequelize.query(
      `
      SELECT p.codigo
      FROM usuarios u
      JOIN usuarios_roles ur ON ur.usuario_id = u.id
      JOIN roles r ON r.id = ur.rol_id
      JOIN roles_permisos rp ON rp.rol_id = r.id
      JOIN permisos p ON p.id = rp.permiso_id
      WHERE u.id = :userId AND p.codigo = :code
      LIMIT 1
      `,
      { replacements: { userId, code } }
    );

    if (!rows?.length) {
      return res.status(403).json({ ok: false, error: "No autorizado", permiso: code });
    }

    return next();
  };
}
