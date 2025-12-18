// tests/01-auth.integration.test.mjs
import request from "supertest";
import app from "../src/app.js";

describe("01) AUTH - integración", () => {
  let token;

  test("Login correcto -> 200 + token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ usuario: "admin", password: "Admin123!" })
      .set("Content-Type", "application/json");

    expect([200, 201]).toContain(res.status);

    // adaptativo: soporta token o accessToken según tu respuesta
    token = res.body.token || res.body.accessToken;
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(20);
  });

  test("Login incorrecto -> 401/400", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ usuario: "admin", password: "WRONG_PASSWORD" })
      .set("Content-Type", "application/json");

    expect([400, 401]).toContain(res.status);
  });

  test("Endpoint protegido SIN token -> 401", async () => {
    const res = await request(app).get("/api/usuarios");
    expect(res.status).toBe(401);
  });

  test("Endpoint protegido CON token -> 200/403 (según RBAC)", async () => {
    const res = await request(app)
      .get("/api/usuarios")
      .set("Authorization", `Bearer ${token}`);

    // Si admin tiene permiso -> 200
    // Si no está seed de permisos aún -> podría ser 403
    expect([200, 403]).toContain(res.status);
  });

  test("Token inválido -> 401", async () => {
    const res = await request(app)
      .get("/api/usuarios")
      .set("Authorization", "Bearer esto.no.es.un.jwt");

    expect(res.status).toBe(401);
  });
});
