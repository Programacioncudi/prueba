/**
 * Archivo: src/modules/personal/personal.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para personal.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./personal.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const personalRepository = makeBaseRepository(Model);
export default personalRepository;
