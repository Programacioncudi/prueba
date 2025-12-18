/**
 * Archivo: tests/unit/sanitize.test.js (ESM)
 * Responsabilidad:
 *   - Probar utilidades de sanitización si existen.
 */

let basicSanitize;

try {
  const mod = await import("../../src/security/sanitize.util.js");
  basicSanitize = mod.basicSanitize;
} catch (err) {
  // Si no existe, saltamos estos tests
}

(basicSanitize ? describe : describe.skip)("Sanitización (unit)", () => {
  test("elimina etiquetas <script> básicas", () => {
    const input = '<script>alert("xss")</script>Hola';
    const out = basicSanitize(input);
    expect(out).not.toMatch(/<script>/i);
    expect(out).toContain("Hola");
  });

  test("devuelve null si el input es null/undefined", () => {
    expect(basicSanitize(null)).toBeNull();
    expect(basicSanitize(undefined)).toBeNull();
  });
});