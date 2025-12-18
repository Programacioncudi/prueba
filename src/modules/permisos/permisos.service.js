/**
 * Archivo: src/modules/permisos/permisos.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para permisos.
 */
import repo from "./permisos.repository.js";

export const permisosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default permisosService;
