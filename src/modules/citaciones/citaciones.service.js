/**
 * Archivo: src/modules/citaciones/citaciones.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para citaciones.
 */
import repo from "./citaciones.repository.js";

export const citacionesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default citacionesService;
