/**
 * Archivo: src/modules/inconvenientesagentes/inconvenientesagentes.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para inconvenientesagentes.
 */
import repo from "./inconvenientesagentes.repository.js";

export const inconvenientesagentesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default inconvenientesagentesService;
