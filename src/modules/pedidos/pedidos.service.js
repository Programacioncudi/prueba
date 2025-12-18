/**
 * Archivo: src/modules/pedidos/pedidos.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para pedidos.
 */
import repo from "./pedidos.repository.js";

export const pedidosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default pedidosService;
