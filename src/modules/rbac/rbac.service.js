/**
 * Archivo: src/modules/rbac/rbac.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para rbac.
 */
import repo from "./rbac.repository.js";

export const rbacService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default rbacService;
