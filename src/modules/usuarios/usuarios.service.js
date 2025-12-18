/**
 * Archivo: src/modules/usuarios/usuarios.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para usuarios.
 */
import repo from "./usuarios.repository.js";

export const usuariosService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default usuariosService;
