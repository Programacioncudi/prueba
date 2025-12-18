/**
 * Archivo: src/modules/localidades/localidades.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para localidades.
 */
import repo from "./localidades.repository.js";

export const localidadesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default localidadesService;
