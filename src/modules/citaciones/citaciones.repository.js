/**
 * Archivo: src/modules/citaciones/citaciones.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para citaciones.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./citaciones.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const citacionesRepository = makeBaseRepository(Model);
export default citacionesRepository;
