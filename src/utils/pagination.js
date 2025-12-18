/**
 * Archivo: src/utils/pagination.js
 * Responsabilidad:
 *   - Normalizar paginación enterprise: page/limit/offset + sort/order
 *   - Poner límites defensivos para evitar DOS por consultas enormes
 */

export const parsePagination = (query = {}) => {
  const page = Math.max(1, Number(query.page ?? 1));
  const limit = Math.min(100, Math.max(1, Number(query.limit ?? 20)));
  const offset = (page - 1) * limit;

  const sort = String(query.sort ?? "id");
  const order = String(query.order ?? "ASC").toUpperCase() === "DESC" ? "DESC" : "ASC";

  return { page, limit, offset, sort, order };
};
