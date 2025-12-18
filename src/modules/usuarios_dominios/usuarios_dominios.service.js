/**
 * Archivo: src/modules/usuarios_dominios/usuarios_dominios.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para usuarios_dominios.
 */
import repo from "./usuarios_dominios.repository.js";

export const usuarios_dominiosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default usuarios_dominiosService;
