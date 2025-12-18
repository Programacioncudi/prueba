/**
 * Archivo: src/modules/regimenhorario/regimenhorario.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para regimenhorario.
 */
import repo from "./regimenhorario.repository.js";

export const regimenhorarioService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default regimenhorarioService;
