/**
 * Archivo: tests/unit/tokenService.test.js (ESM)
 * Responsabilidad:
 *   - Probar generación y verificación básica de tokens con TokenService.
 */

import { TokenService } from "../../src/security/token.service.js";

describe("TokenService (unit)", () => {
  test("genera un par de tokens válido (access + refresh)", () => {
    const payload = {
      id: 1,
      email: "test@example.com",
      rol: "admin"
    };

    const { accessToken, refreshToken, jti } = TokenService.generateTokenPair(payload);

    expect(accessToken).toBeTruthy();
    expect(refreshToken).toBeTruthy();
    expect(jti).toBeTruthy();
  });
});