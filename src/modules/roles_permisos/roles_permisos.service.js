/**
 * Archivo: src/modules/roles_permisos/roles_permisos.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para roles_permisos.
 */
import repo from "./roles_permisos.repository.js";

export const roles_permisosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default roles_permisosService;
