/**
 * Archivo: src/server.js
 * Responsabilidad:
 *   - Punto de entrada principal de la API (ENTERPRISE).
 *   - Validar configuración mínima.
 *   - Conectar a la base de datos.
 *   - Levantar Express.
 *   - Manejar errores de proceso (unhandledRejection/uncaughtException).
 */

import { env } from "./config/env.config.js";
import { sequelize } from "./config/db.config.js";
import { logger } from "./utils/logger.js";
import app from "./app.js";

const port = Number(env.PORT ?? 3000);

const start = async () => {
  try {
    logger.info("BOOTSTRAP_START", { env: env.NODE_ENV, port });

    // DB health: autenticar (no sincroniza ni altera esquema)
    await sequelize.authenticate();
    logger.info("DB_CONNECTED", { host: env.DB_HOST, db: env.DB_NAME });

    app.listen(port, () => {
      logger.info("HTTP_LISTENING", { port });
    });
  } catch (err) {
    logger.error("BOOTSTRAP_FAILED", { message: err?.message, stack: err?.stack });
    process.exit(1);
  }
};

// Hardening: capturar errores fuera de Express
process.on("unhandledRejection", (reason) => {
  logger.error("UNHANDLED_REJECTION", { reason });
});
process.on("uncaughtException", (err) => {
  logger.error("UNCAUGHT_EXCEPTION", { message: err.message, stack: err.stack });
  process.exit(1);
});

start();
