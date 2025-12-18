/**
 * Archivo: src/modules/cc/cc.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para cc.
 */
import repo from "./cc.repository.js";

export const ccService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default ccService;
