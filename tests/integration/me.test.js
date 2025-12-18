/**
 * Archivo: tests/integration/me.test.js (ESM)
 * Responsabilidad:
 *   - Probar endpoint de usuario autenticado:
 *       * /api/usuarios/me
 */

import request from "supertest";
import { getApp, loginAsAdmin } from "../helpers/testUtils.js";

describe("AUTH /api/usuarios/me (integration)", () => {
  let app;
  let token;

  beforeAll(async () => {
    app = await getApp();
    const auth = await loginAsAdmin();
    token = auth.token;
  });

  test("devuelve los datos del usuario autenticado con token válido", async () => {
    const res = await request(app)
      .get("/api/usuarios/me")
      .set("Authorization", `Bearer ${token}`);

    expect([200, 204]).toContain(res.status);
    if (res.status === 200) {
      expect(res.body).toHaveProperty("ok");
      expect(res.body).toHaveProperty("user");
    }
  });

  test("sin token devuelve 401 o 403", async () => {
    const res = await request(app).get("/api/usuarios/me");
    expect([401, 403]).toContain(res.status);
  });
});