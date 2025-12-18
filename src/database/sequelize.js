import { Sequelize } from "sequelize";
import { env } from "../config/env.config.js";

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

export default sequelize;
