/**
 * Archivo: src/modules/ley/ley.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para ley.
 */
import repo from "./ley.repository.js";

export const leyService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default leyService;
