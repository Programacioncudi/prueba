/**
 * Archivo: src/modules/expedientes/expedientes.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para expedientes.
 */
import repo from "./expedientes.repository.js";

export const expedientesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default expedientesService;
