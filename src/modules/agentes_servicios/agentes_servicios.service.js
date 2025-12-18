/**
 * Archivo: src/modules/agentes_servicios/agentes_servicios.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para agentes_servicios.
 */
import repo from "./agentes_servicios.repository.js";

export const agentes_serviciosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default agentes_serviciosService;
