/**
 * Archivo: src/modules/jefedeptos/jefedeptos.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para jefedeptos.
 */
import repo from "./jefedeptos.repository.js";

export const jefedeptosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default jefedeptosService;
