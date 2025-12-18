/**
 * Archivo: src/modules/personal/personal.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para personal.
 */
import repo from "./personal.repository.js";

export const personalService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default personalService;
