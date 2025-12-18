/**
 * Archivo: src/modules/roles/roles.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para roles.
 */
import repo from "./roles.repository.js";

export const rolesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default rolesService;
