/**
 * Archivo: src/modules/ministerios/ministerios.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para ministerios.
 */
import repo from "./ministerios.repository.js";

export const ministeriosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default ministeriosService;
