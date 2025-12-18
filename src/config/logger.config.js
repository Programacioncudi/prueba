/**
 * Archivo: src/config/logger.config.js
 * Responsabilidad:
 *   - Logger central para la API usando winston.
 */

import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()]
});
