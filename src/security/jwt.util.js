// src/security/jwt.util.js
import jwt from "jsonwebtoken";
import { env } from "../config/env.config.js";

export const signAccessToken = (payload) =>
  jwt.sign(payload, env.JWT_ACCESS_SECRET, { expiresIn: "15m" });

export const signRefreshToken = (payload) =>
  jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, env.JWT_ACCESS_SECRET);
  } catch (err) {
    throw { status: 401, message: "Token de acceso inválido" };
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, env.JWT_REFRESH_SECRET);
  } catch (err) {
    throw { status: 401, message: "Refresh token inválido" };
  }
};
