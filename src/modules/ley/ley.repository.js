/**
 * Archivo: src/modules/ley/ley.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para ley.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./ley.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const leyRepository = makeBaseRepository(Model);
export default leyRepository;
