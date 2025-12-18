// config/config.cjs
const path = require("path");
const dotenv = require("dotenv");

// Resolver entorno
const NODE_ENV = process.env.NODE_ENV || "development";

// Cargar el .env correcto explícitamente
dotenv.config({
  path: path.resolve(process.cwd(), `.env/.env.${NODE_ENV}`)
});

// Validación dura (enterprise)
if (!process.env.DB_USER) {
  throw new Error(
    `DB_USER no está definido. Archivo esperado: .env/.env.${NODE_ENV}`
  );
}

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },

  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    dialect: "mysql",
    logging: false,
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
};
