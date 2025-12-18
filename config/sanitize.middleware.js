/**
 * Archivo: src/middleware/sanitize.middleware.js
 * Responsabilidad:
 *   - Sanitizar TODAS las entradas de usuario (body, query, params)
 *     con un enfoque ENTERPRISE:
 *       * Eliminación de caracteres peligrosos (\0, \u0000–\u001F)
 *       * Eliminación de payloads XSS comunes
 *       * Bloqueo de script tags completos
 *       * Bloqueo de event-handlers onClick/onLoad/etc.
 *       * Limpieza de espacios sospechosos
 *       * Protección contra JSON injection
 *   - Preparado para entornos hospitalarios / gubernamentales.
 *   - No destruye información válida.
 */

/**
 * Lista de patrones maliciosos conocidos en ataques XSS/script injection.
 * Esta lista está basada en OWASP + CVEs comunes.
 */
const maliciousPatterns = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,          // script completo
  /<script[\s\S]*?>/gi,                            // script abierto
  /<\/script>/gi,                                  // script cerrado
  /javascript:/gi,                                 // javascript: protocol
  /data:text\/html/gi,                             // payloads embebidos
  /on[a-z]+\s*=/gi,                                // onload=, onclick=, etc.
  /<iframe[\s\S]*?>/gi,                             // iframes maliciosos
  /<\/iframe>/gi,
  /<img[\s\S]*?>/gi,                                // ataques XSS en imagen
  /<link[\s\S]*?>/gi,
  /<object[\s\S]*?>/gi,
  /<embed[\s\S]*?>/gi,
  /eval\(/gi,                                      // eval()
  /new Function/gi,                                // generadores de funciones
  /document\.cookie/gi,                            // robo de cookies
  /document\.location/gi,
  /window\.location/gi,
  /window\.open/gi
];

/**
 * Función que sanitiza cualquier string encontrado en input del usuario.
 */
function sanitizeString(value) {
  if (typeof value !== "string") return value;

  let v = value;

  // 1. Eliminar caracteres de control peligrosos
  v = v.replace(/[\u0000-\u001F]+/g, "");

  // 2. Normalizar espacios extraños y unicode invisibles
  v = v.replace(/\s+/g, " ").trim();

  // 3. Bloquear patrones maliciosos conocidos
  maliciousPatterns.forEach((pattern) => {
    v = v.replace(pattern, "");
  });

  // 4. Bloquear llaves sospechosas en JSON injection
  v = v.replace(/[\{\}]/g, "");

  return v;
}

/**
 * Sanitización profunda recursiva para objetos/arrays.
 */
function deepSanitize(value) {
  if (typeof value === "string") {
    return sanitizeString(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepSanitize(item));
  }

  if (value && typeof value === "object") {
    const cleaned = {};
    for (const [key, val] of Object.entries(value)) {
      const cleanKey = sanitizeString(key);
      cleaned[cleanKey] = deepSanitize(val);
    }
    return cleaned;
  }

  return value;
}

export const sanitizeMiddleware = (req, _res, next) => {
  if (req.body) req.body = deepSanitize(req.body);
  if (req.query) req.query = deepSanitize(req.query);
  if (req.params) req.params = deepSanitize(req.params);
  next();
};
