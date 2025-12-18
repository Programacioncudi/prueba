/**
 * Archivo: tests/security/rbac.test.js (ESM)
 * Responsabilidad:
 *   - Verificar comportamiento básico de RBAC:
 *       * Usuario sin permisos no puede acceder a recursos protegidos.
 */

import request from "supertest";
import { getApp, createTestUser } from "../helpers/testUtils.js";

describe("Seguridad RBAC (security)", () => {
  let app;

  beforeAll(async () => {
    app = await getApp();
  });

  test("usuario sin permisos no puede acceder a /api/personal (espera 403 o 401)", async () => {
    const creds = await createTestUser({
      username: "user_sin_permisos",
      password: "Test123!",
      permisos: "none"
    });

    const loginRes = await request(app)
      .post("/api/usuarios/login")
      .send({ username: creds.username, password: creds.password });

    const token =
      loginRes.body.token ||
      (loginRes.body.tokens && loginRes.body.tokens.accessToken);

    const res = await request(app)
      .get("/api/personal")
      .set("Authorization", `Bearer ${token}`);

    expect([401, 403]).toContain(res.status);
  });
});