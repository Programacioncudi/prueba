/**
 * Archivo: src/middleware/cors.middleware.js
 * Responsabilidad:
 *   - Configurar CORS enterprise con allowlist
 *   - Soportar múltiples orígenes por env: CORS_ORIGIN="https://a.com,https://b.com"
 */

import cors from "cors";

export const corsMiddleware = (env) => {
  const allowed = env.CORS_ORIGIN ? String(env.CORS_ORIGIN).split(",").map((s) => s.trim()).filter(Boolean) : [];

  return cors({
    origin: (origin, callback) => {
      // Permitir requests sin origin (curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowed.length === 0) return callback(null, true); // fallback controlado
      if (allowed.includes(origin)) return callback(null, true);

      return callback(new Error("Origen no permitido por CORS"), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Request-Id"],
    maxAge: 86400,
  });
};
