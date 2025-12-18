/**
 * Archivo: src/modules/consultas/consultas.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para consultas.
 */
import repo from "./consultas.repository.js";

export const consultasService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default consultasService;
