/**
 * Archivo: tests/security/rateLimit.test.js (ESM)
 * Responsabilidad:
 *   - Verificar que los endpoints protegidos por rate-limit
 *     respondan 429 cuando se excede el límite.
 */

import request from "supertest";
import { getApp, loginAsAdmin } from "../helpers/testUtils.js";

describe("Rate Limit (security)", () => {
  let app;
  let token;

  beforeAll(async () => {
    app = await getApp();
    const auth = await loginAsAdmin();
    token = auth.token;
  });

  test("múltiples POST a /api/personal deberían eventualmente gatillar 429", async () => {
    const attempts = 15;
    let got429 = false;

    for (let i = 0; i < attempts; i++) {
      const res = await request(app)
        .post("/api/personal")
        .set("Authorization", `Bearer ${token}`)
        .send({
          dni: "99999999" + i,
          apellido: "Test",
          nombre: "RateLimit"
        });

      if (res.status === 429) {
        got429 = true;
        break;
      }
    }

    // Si tu configuración de rate-limit es suave, puede que no dispare 429.
    expect(got429).toBe(true);
  });
});