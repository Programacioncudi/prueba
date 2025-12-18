/**
 * Archivo: src/middleware/audit.middleware.js
 * Responsabilidad:
 *   - Registrar auditoría de cada request entrante.
 *   - Identificar usuario (si existe), ip, endpoint, método.
 *   - Integrarse con el logger enterprise.
 */

import { logger } from "../utils/logger.js";
import { getRequestContext } from "./requestContext.middleware.js";

export const auditMiddleware = (req, res, next) => {
  const start = Date.now();

  // Cuando termina la respuesta, registramos datos de auditoría
  res.on("finish", () => {
    const duration = Date.now() - start;

    const ctx = getRequestContext();

    logger.info("AUDIT_EVENT", {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: duration,
      ip: req.ip,
      user: req.user || null,
      requestId: ctx.requestId
    });
  });

  next();
};
