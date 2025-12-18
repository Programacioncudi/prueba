/**
 * Archivo: src/modules/ordenesdetrabajo/ordenesdetrabajo.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para ordenesdetrabajo.
 */
import repo from "./ordenesdetrabajo.repository.js";

export const ordenesdetrabajoService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default ordenesdetrabajoService;
