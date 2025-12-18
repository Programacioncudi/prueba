/**
 * Archivo: src/modules/tareas/tareas.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para tareas.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./tareas.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const tareasRepository = makeBaseRepository(Model);
export default tareasRepository;
