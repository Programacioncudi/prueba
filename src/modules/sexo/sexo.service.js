/**
 * Archivo: src/modules/sexo/sexo.service.js
 * Responsabilidad:
 *   - Orquestar la lógica de negocio para sexo.
 */
import repo from "./sexo.repository.js";

export const sexoService = {
  list: (query) => repo.list(query),
  getById: (id) => repo.getById(id),
  create: (payload, options) => repo.create(payload, options),
  update: (id, payload, options) => repo.update(id, payload, options),
  remove: (id, options) => repo.remove(id, options),
};

export default sexoService;
