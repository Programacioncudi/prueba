/**
 * Archivo: src/modules/tblarchivos/tblarchivos.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para tblarchivos.
 */
import repo from "./tblarchivos.repository.js";

export const tblarchivosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default tblarchivosService;
