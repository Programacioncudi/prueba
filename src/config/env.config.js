// src/config/env.config.js
import dotenv from "dotenv";
import path from "path";
import Joi from "joi";

const NODE_ENV = process.env.NODE_ENV || "development";

// Cargar .env.<entorno>
dotenv.config({
  path: path.resolve(process.cwd(), `.env/.env.${NODE_ENV}`)
});

// Esquema enterprise
const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "test", "production")
    .required(),

  PORT: Joi.number().default(3001),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(3306),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().allow("").required(),
  DB_NAME: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default("15m"),

  REFRESH_SECRET: Joi.string().required(),
  REFRESH_EXPIRES_IN: Joi.string().default("7d"),

  RATE_LIMIT_WINDOW: Joi.number().default(60000),
  RATE_LIMIT_MAX: Joi.number().default(100),

  SENSITIVE_LIMIT_WINDOW: Joi.number().default(60000),
  SENSITIVE_LIMIT_MAX: Joi.number().default(10),

  CORS_ORIGIN: Joi.string().required(),

  LOG_LEVEL: Joi.string().default("info"),

  SWAGGER_TITLE: Joi.string().default("API"),
  SWAGGER_VERSION: Joi.string().default("1.0.0"),
  SWAGGER_DESCRIPTION: Joi.string().default("API Docs"),
}).unknown(true);

// Validación
const { error, value } = schema.validate(process.env, {
  abortEarly: false,
});

if (error) {
  console.error("❌ Error en configuración de entorno:");
  error.details.forEach(d => console.error(` - ${d.message}`));
  process.exit(1);
}

export const env = value;
