/**
 * Archivo: src/modules/funciones/funciones.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para funciones.
 */
import repo from "./funciones.repository.js";

export const funcionesService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default funcionesService;
