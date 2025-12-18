/**
 * Archivo: src/modules/nomenclador/nomenclador.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para nomenclador.
 */
import repo from "./nomenclador.repository.js";

export const nomencladorService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default nomencladorService;
