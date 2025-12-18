// src/middleware/rateLimit.middleware.js
import rateLimit from "express-rate-limit";

export function rateLimitMiddleware(env) {
  return rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW,
    max: env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
  });
}

export function sensitiveRateLimit(env) {
  return rateLimit({
    windowMs: env.SENSITIVE_LIMIT_WINDOW,
    max: env.SENSITIVE_LIMIT_MAX,
    message: "Demasiados intentos. Intente más tarde.",
  });
}
