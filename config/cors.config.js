/**
 * Archivo: src/config/cors.config.js
 * Responsabilidad:
 *   - Definir la política CORS de la API.
 *   - Restringir orígenes permitidos según configuración.
 *   - Proteger contra consumo no autorizado desde otros dominios.
 */

const RAW_ORIGINS = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map(o => o.trim())
  .filter(Boolean);

// Orígenes permitidos por defecto en desarrollo si no se configuró nada
const defaultDevOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
];

const allowedOrigins = RAW_ORIGINS.length > 0 ? RAW_ORIGINS : defaultDevOrigins;

export const corsOptions = {
  origin: function (origin, callback) {
    // Requests sin origin (Postman, curl) se permiten
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Origen no permitido por CORS: ${origin}`), false);
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  optionsSuccessStatus: 204,
};
