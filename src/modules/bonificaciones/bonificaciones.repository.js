/**
 * Archivo: src/modules/bonificaciones/bonificaciones.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para bonificaciones.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./bonificaciones.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const bonificacionesRepository = makeBaseRepository(Model);
export default bonificacionesRepository;
