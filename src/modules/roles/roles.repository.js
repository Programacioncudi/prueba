/**
 * Archivo: src/modules/roles/roles.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para roles.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./roles.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const rolesRepository = makeBaseRepository(Model);
export default rolesRepository;
