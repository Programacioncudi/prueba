// src/middleware/ipAllowlist.middleware.js

/**
 * IP Allowlist (opt-in)
 * - Si env.IP_ALLOWLIST está vacío o no existe, NO bloquea (dev-friendly)
 * - Si tiene IPs separadas por coma: solo esas IPs podrán acceder.
 *
 * Recomendación:
 * - En producción detrás de Nginx, asegurate de tener:
 *     app.set("trust proxy", 1);
 *   para que req.ip refleje la IP real (X-Forwarded-For).
 */
export function ipAllowlistMiddleware(env) {
  const allowed = String(env.IP_ALLOWLIST || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!allowed.length) {
    return (_req, _res, next) => next();
  }

  return (req, res, next) => {
    const ip = req.ip || "";
    const ok = allowed.includes(ip);

    if (!ok) {
      return res.status(403).json({ ok: false, error: "IP no permitida" });
    }

    return next();
  };
}
