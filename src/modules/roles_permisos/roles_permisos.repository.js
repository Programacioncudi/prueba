/**
 * Archivo: src/modules/roles_permisos/roles_permisos.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para roles_permisos.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./roles_permisos.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const roles_permisosRepository = makeBaseRepository(Model);
export default roles_permisosRepository;
