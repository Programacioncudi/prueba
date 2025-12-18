/**
 * Archivo: src/config/rateLimit.config.js
 * Responsabilidad:
 *   - Definir políticas de rate limiting para:
 *       * Toda la API (protección global).
 *       * Endpoints sensibles (login, creación de usuarios, cambios críticos).
 */

import rateLimit from "express-rate-limit";

/**
 * Límite global básico:
 * - 1000 requests por 15 minutos por IP.
 * - Suficiente para uso normal, pero frena flood bruto.
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message: "Demasiadas solicitudes desde esta IP. Intente nuevamente más tarde.",
    code: "RATE_LIMIT_GLOBAL",
  },
});

/**
 * Límite para LOGIN:
 * - 10 intentos por 15 minutos.
 * - Protege contra fuerza bruta.
 */
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message: "Demasiados intentos de login. Intente nuevamente más tarde.",
    code: "RATE_LIMIT_LOGIN",
  },
});

/**
 * Límite para endpoints muy sensibles (crear usuario, cambiar permisos, etc.).
 * - 50 requests por 15 minutos.
 */
export const sensitiveWriteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message: "Demasiadas operaciones sensibles desde esta IP.",
    code: "RATE_LIMIT_SENSITIVE",
  },
});
