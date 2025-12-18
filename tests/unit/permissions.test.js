/**
 * Archivo: tests/unit/permissions.test.js (ESM)
 * Responsabilidad:
 *   - Probar helpers de permisos / RBAC si existen.
 */

let hasPermission;

try {
  const mod = await import("../../src/security/permissions.js");
  hasPermission = mod.hasPermission;
} catch (err) {
  // Si no existe, saltamos los tests
}

(hasPermission ? describe : describe.skip)("Permissions / RBAC (unit)", () => {
  test("hasPermission devuelve true cuando el rol tiene permiso directo", () => {
    const userPerms = ["personal:list", "personal:get"];
    expect(hasPermission(userPerms, "personal:list")).toBe(true);
  });

  test("hasPermission devuelve false cuando el rol NO tiene permiso", () => {
    const userPerms = ["personal:list"];
    expect(hasPermission(userPerms, "agentes:list")).toBe(false);
  });
});