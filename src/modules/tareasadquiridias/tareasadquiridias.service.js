/**
 * Archivo: src/modules/tareasadquiridias/tareasadquiridias.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para tareasadquiridias.
 */
import repo from "./tareasadquiridias.repository.js";

export const tareasadquiridiasService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default tareasadquiridiasService;
