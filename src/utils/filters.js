/**
 * Archivo: src/utils/filters.js
 * Responsabilidad:
 *   - Parsear filtros con convención: ?filter[campo]=valor
 *   - Devolver un objeto "where" simple (valores escalares)
 *
 * Nota enterprise:
 *   - Para filtros complejos (rangos, operadores) se recomienda evolucionar a un parser más estricto.
 */

export const parseFilters = (query = {}) => {
  const filters = {};
  const raw = query.filter;

  if (raw && typeof raw === "object") {
    for (const [k, v] of Object.entries(raw)) {
      if (v === undefined || v === null || v === "") continue;
      filters[k] = v;
    }
  }

  return filters;
};
