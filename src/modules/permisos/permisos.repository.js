/**
 * Archivo: src/modules/permisos/permisos.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para permisos.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./permisos.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const permisosRepository = makeBaseRepository(Model);
export default permisosRepository;
