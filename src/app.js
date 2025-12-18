/**
 * Archivo: src/app.js
 * Responsabilidad:
 *   - Configurar Express en modo ENTERPRISE:
 *       * Seguridad avanzada (helmet + headers)
 *       * CORS seguro
 *       * Sanitización enterprise
 *       * Auditoría (logging)
 *       * Correlation-ID (trazabilidad)
 *       * Rate limiting global + rate limit sensible (auth)
 *       * Body parsers seguros
 *       * Swagger / OpenAPI (público)
 *       * Rutas principales (auth + auto-mount módulos)
 *       * Manejo centralizado de errores
 */

import express from "express";

import { env } from "./config/env.config.js";
import { logger } from "./utils/logger.js";

import { helmetMiddleware } from "./middleware/helmet.middleware.js";
import { corsMiddleware } from "./middleware/cors.middleware.js";
import {
  rateLimitMiddleware,
  sensitiveRateLimit,
} from "./middleware/rateLimit.middleware.js";
import enterpriseSanitize from "./middleware/sanitize.middleware.js";
import { correlationIdMiddleware } from "./middleware/correlationId.middleware.js";
import { ipAllowlistMiddleware } from "./middleware/ipAllowlist.middleware.js";
import { auditMiddleware } from "./middleware/audit.middleware.js";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./middleware/error.middleware.js";

import authRouter from "./modules/auth/auth.routes.js";
import { registerRoutes } from "./routes/index.js";
import { mountSwagger } from "./docs/swagger.js";
import { requireAuth, rbacEnforce } from "./middleware/rbac.middleware.js";

const app = express();

/**
 * IMPORTANTE (Enterprise):
 * - trust proxy permite que Express respete X-Forwarded-For (Nginx/Reverse proxy).
 * - En LAN/intranet igual conviene para IP real + allowlist + rate-limit.
 */
app.set("trust proxy", 1);

/* ============================
 * 1) Seguridad base (headers + CSP)
 * ============================ */
app.use(helmetMiddleware());

/* ============================
 * 2) Parsers + sanitización
 * ============================ */
app.use(express.json({ limit: "1mb" }));
app.use(enterpriseSanitize);

/* ============================
 * 3) CORS + rate limiting + allowlist
 * ============================ */
app.use(corsMiddleware(env));
app.use(rateLimitMiddleware(env));
app.use(ipAllowlistMiddleware(env)); // opt-in: solo bloquea si IP_ALLOWLIST tiene valores

/* ============================
 * 4) Auditoría + trazabilidad
 * ============================ */
app.use(correlationIdMiddleware);
app.use(auditMiddleware);

/* ============================
 * 5) Swagger (público)
 * ============================ */
mountSwagger(app, { path: "/docs" });

/* ============================
 * 6) Rutas públicas
 * ============================ */
app.use("/api/auth", sensitiveRateLimit(env)); // brute-force protection
app.use("/api/auth", authRouter);

app.get("/health", (_req, res) =>
  res.json({ ok: true, uptime: process.uptime(), env: env.NODE_ENV })
);

/* ============================
 * 7) Seguridad global (JWT + RBAC)
 * ============================ */
app.use(requireAuth);
app.use(rbacEnforce());

/* ============================
 * 8) Módulos (auto, protegidos)
 * ============================ */
await registerRoutes(app, {
  basePath: "/api",
  blacklist: ["auth"],
});

/* ============================
 * 9) 404 + error handler
 * ============================ */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

logger.info("APP_READY", { env: env.NODE_ENV });

export default app;
