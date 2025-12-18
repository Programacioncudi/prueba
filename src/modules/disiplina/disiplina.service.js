/**
 * Archivo: src/modules/disiplina/disiplina.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para disiplina.
 */
import repo from "./disiplina.repository.js";

export const disiplinaService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default disiplinaService;
