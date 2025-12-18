/**
 * Archivo: src/modules/tareas/tareas.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para tareas.
 */
import repo from "./tareas.repository.js";

export const tareasService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default tareasService;
