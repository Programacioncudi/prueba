/**
 * Archivo: src/modules/tipoderesolucion/tipoderesolucion.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para tipoderesolucion.
 */
import repo from "./tipoderesolucion.repository.js";

export const tipoderesolucionService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default tipoderesolucionService;
