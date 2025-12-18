import { Sequelize } from "sequelize";
import config from "../config/db.config.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
    logging: false
  }
);

export default sequelize;
