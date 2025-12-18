/**
 * Archivo: tests/integration/login.test.js (ESM)
 * Responsabilidad:
 *   - Probar el flujo de login real contra la API:
 *       * /api/usuarios/login
 */

import request from "supertest";
import { getApp, createTestUser } from "../helpers/testUtils.js";

describe("AUTH /api/usuarios/login (integration)", () => {
  let app;

  beforeAll(async () => {
    app = await getApp();
  });

  test("login exitoso devuelve 200, ok=true y token", async () => {
    const creds = await createTestUser({
      username: "login_user",
      password: "Login123!",
      permisos: "admin"
    });

    const res = await request(app)
      .post("/api/usuarios/login")
      .send({ username: creds.username, password: creds.password });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("ok");
    expect(res.body.ok).toBe(true);

    const token =
      res.body.token ||
      (res.body.tokens && res.body.tokens.accessToken);

    expect(token).toBeTruthy();
  });

  test("login con credenciales inválidas devuelve 400 o 401", async () => {
    const res = await request(app)
      .post("/api/usuarios/login")
      .send({ username: "no_existe", password: "cualquiera" });

    expect([400, 401]).toContain(res.status);
  });
});