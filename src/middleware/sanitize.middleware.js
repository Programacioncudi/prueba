import xss from "xss";

/**
 * Sanitiza objetos recursivamente (deep)
 */
export function sanitizeObject(obj) {
  const clean = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];

    if (typeof val === "string") {
      clean[key] = xss(val, {
        whiteList: {}, // ENTERPRISE: elimina TODAS las etiquetas HTML
        stripIgnoreTag: true,
        stripIgnoreTagBody: ["script"],
      });
    } else if (val !== null && typeof val === "object" && !Array.isArray(val)) {
      clean[key] = sanitizeObject(val);
    } else {
      clean[key] = val;
    }
  }
  return clean;
}

/**
 * Middleware ENTERPRISE (compatible con Jest)
 */
export function enterpriseSanitize(req, _res, next) {
  try {
    if (req.body) req.body = sanitizeObject(req.body);
    if (req.query) req.query = sanitizeObject(req.query);
    if (req.params) req.params = sanitizeObject(req.params);
    next();
  } catch (e) {
    console.error("Error sanitizando payload:", e);
    next(e);
  }
}

/**
 * Export default para Express
 */
export default enterpriseSanitize;
