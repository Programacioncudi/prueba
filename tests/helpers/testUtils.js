import request from "supertest";
import app from "../../src/app.js";

export function getApp() {
  return app;
}

export async function loginAsAdmin() {
  const res = await request(app)
    .post("/api/usuarios/login")
    .send({
      email: "admin@test.com",
      password: "admin123",
    });

  return res.body.token || res.body.accessToken;
}

export async function createTestUser(data) {
  return {
    email: data.email ?? "user@test.com",
    password: data.password ?? "user123",
  };
}
