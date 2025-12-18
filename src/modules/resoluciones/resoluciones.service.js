/**
 * Archivo: src/modules/resoluciones/resoluciones.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para resoluciones.
 */
import repo from "./resoluciones.repository.js";

export const resolucionesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default resolucionesService;
