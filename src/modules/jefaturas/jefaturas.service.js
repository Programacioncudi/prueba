/**
 * Archivo: src/modules/jefaturas/jefaturas.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para jefaturas.
 */
import repo from "./jefaturas.repository.js";

export const jefaturasService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default jefaturasService;
