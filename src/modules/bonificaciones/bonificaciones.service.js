/**
 * Archivo: src/modules/bonificaciones/bonificaciones.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para bonificaciones.
 */
import repo from "./bonificaciones.repository.js";

export const bonificacionesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default bonificacionesService;
