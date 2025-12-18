/**
 * Archivo: src/middleware/error.middleware.js
 * Responsabilidad:
 *   - Manejo centralizado de errores.
 *   - Convertir cualquier error en una respuesta JSON homogénea.
 *   - Registrar errores críticos en logs.
 */

import { logger } from "../utils/logger.js";

export const errorMiddleware = (err, req, res, next) => {
  // Log completo del error
  logger.error("API_ERROR", {
    message: err.message,
    stack: err.stack,
    route: req.originalUrl,
    method: req.method,
    user: req.user || null,
    ip: req.ip
  });

  const status = err.status || 500;

  res.status(status).json({
    ok: false,
    error: {
      message: err.message || "Internal server error",
      code: err.code || "SERVER_ERROR"
    }
  });
};

export const notFoundMiddleware = (_req, res) => {
  return res.status(404).json({ ok: false, error: "Ruta no encontrada" });
};
