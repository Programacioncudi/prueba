// src/middleware/correlationId.middleware.js
import crypto from "crypto";

/**
 * Correlation-ID enterprise
 * - Acepta X-Request-Id entrante o genera uno nuevo (UUIDv4)
 * - Lo expone en:
 *   - req.requestId (para logs / auditoría)
 *   - header de respuesta: X-Request-Id
 *
 * Nota: si luego centralizás logs, este id te permite rastrear una request completa.
 */
export function correlationIdMiddleware(req, res, next) {
  const incoming = req.headers["x-request-id"];
  const id =
    typeof incoming === "string" && incoming.trim().length
      ? incoming.trim()
      : crypto.randomUUID();

  req.requestId = id;
  res.setHeader("X-Request-Id", id);

  next();
}
