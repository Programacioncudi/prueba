/**
 * Archivo: src/modules/reparticiones/reparticiones.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para reparticiones.
 */
import repo from "./reparticiones.repository.js";

export const reparticionesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default reparticionesService;
