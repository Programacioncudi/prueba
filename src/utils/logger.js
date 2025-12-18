// src/utils/logger.js
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { env } from "../config/env.config.js";

const isProd = env.NODE_ENV === "production";

const transportRotate = new DailyRotateFile({
  dirname: "logs",
  filename: "app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
  zippedArchive: true,
  level: "info",
});

const transportConsole = new winston.transports.Console({
  format: isProd
    ? winston.format.json()
    : winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf((msg) => `${msg.timestamp} ▶ ${msg.level}: ${msg.message}`)
      ),
});

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [transportConsole, ...(isProd ? [transportRotate] : [])],
});
