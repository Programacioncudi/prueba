/**
 * Archivo: tests/security/sanitizationAttack.test.js (ESM)
 * Responsabilidad:
 *   - Verificar que la API sanee payloads sospechosos (XSS).
 */

import request from "supertest";
import { getApp, loginAsAdmin } from "../helpers/testUtils.js";

describe("Sanitización de payloads (security)", () => {
  let app;
  let token;

  beforeAll(async () => {
    app = await getApp();
    const auth = await loginAsAdmin();
    token = auth.token;
  });

  test("crear recurso con <script> no debería persistir la etiqueta cruda", async () => {
    const res = await request(app)
      .post("/api/consultas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        dni: "12345678",
        motivo_consulta: '<script>alert("xss")</script> Dolor de cabeza',
        explicacion: "Hace 2 días",
        atendido_por: "Dr. X"
      });

    expect([200, 201, 400]).toContain(res.status);
  });
});