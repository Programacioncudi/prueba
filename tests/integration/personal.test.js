/**
 * Archivo: tests/integration/personal.test.js (ESM)
 * Responsabilidad:
 *   - Probar un GET básico del módulo /api/personal.
 */

import request from "supertest";
import { getApp, loginAsAdmin } from "../helpers/testUtils.js";

describe("Módulo /api/personal (integration)", () => {
  let app;
  let token;

  beforeAll(async () => {
    app = await getApp();
    const auth = await loginAsAdmin();
    token = auth.token;
  });

  test("GET /api/personal responde 200 o 204 siendo admin", async () => {
    const res = await request(app)
      .get("/api/personal")
      .set("Authorization", `Bearer ${token}`);

    expect([200, 204]).toContain(res.status);
  });

  test("GET /api/personal sin token devuelve 401 o 403", async () => {
    const res = await request(app).get("/api/personal");
    expect([401, 403]).toContain(res.status);
  });
});