// src/config/db.config.js
import { Sequelize } from "sequelize";
import { env } from "./env.config.js";
import { logger } from "../utils/logger.js";

export const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    port: Number(env.DB_PORT ?? 3306),
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    define: {
      freezeTableName: true,
      underscored: true,
    },
  }
);

/**
 * Conecta a la base de datos y loguea el resultado.
 * Se usa en src/server.js
 */
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("?? Conexión a MySQL establecida correctamente");
  } catch (error) {
    logger.error("?? Error conectando a MySQL", {
      error: error.message,
      stack: error.stack,
    });
    throw error;
  }
};
export default sequelize;
