import jwt from "jsonwebtoken";
import crypto from "crypto";

class TokenService {
  static generateTokenPair(payload) {
    const jti = crypto.randomUUID();

    const accessToken = jwt.sign(
      { ...payload, jti },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { jti },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    return { accessToken, refreshToken, jti };
  }

  static verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

export default TokenService;
export { TokenService };
