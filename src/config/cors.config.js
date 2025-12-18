/**
 * Archivo: src/config/cors.config.js
 * Responsabilidad:
 *   - Configuración centralizada de CORS.
 */

const devOrigins = [
  "http://localhost:3000",
  "http://localhost:5173"
];

const prodOrigins = [
  process.env.CORS_ORIGIN
];

export const corsOptions = {
  origin: (origin, callback) => {
    const allowed = process.env.NODE_ENV === "production"
      ? prodOrigins
      : devOrigins;

    if (!origin || allowed.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("Origen no permitido por CORS."));
  }
};
