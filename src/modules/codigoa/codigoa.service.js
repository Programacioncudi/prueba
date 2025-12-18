/**
 * Archivo: src/modules/codigoa/codigoa.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para codigoa.
 */
import repo from "./codigoa.repository.js";

export const codigoaService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default codigoaService;
