/**
 * Archivo: src/config/rateLimit.config.js
 * Responsabilidad:
 *   - Limitar peticiones por IP para proteger la API.
 */

import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,                 // 15 minutos
  max: process.env.NODE_ENV === "production" ? 100 : 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    error: "Demasiadas solicitudes. Intente más tarde."
  }
});
