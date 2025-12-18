/**
 * Archivo: src/modules/ocupacion/ocupacion.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para ocupacion.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./ocupacion.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const ocupacionRepository = makeBaseRepository(Model);
export default ocupacionRepository;
