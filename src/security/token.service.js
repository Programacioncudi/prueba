// src/security/token.service.js
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { env } from "../config/env.config.js";

function generateJti() {
  return crypto.randomUUID();
}

export const tokenService = {
  generateTokenPair(payload) {
    const jti = generateJti();

    const accessToken = jwt.sign(
      { ...payload, jti, type: "access" },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN || "15m" }
    );

    const refreshToken = jwt.sign(
      { ...payload, jti, type: "refresh" },
      env.JWT_REFRESH_SECRET,
      { expiresIn: env.JWT_REFRESH_EXPIRES_IN || "7d" }
    );

    return {
      accessToken,
      refreshToken,
      jti,
    };
  },

  verifyAccess(token) {
    return jwt.verify(token, env.JWT_SECRET);
  },

  verifyRefresh(token) {
    return jwt.verify(token, env.JWT_REFRESH_SECRET);
  },
};

/**
 * Compatibilidad enterprise
 */
export const TokenService = tokenService;
export default tokenService;
