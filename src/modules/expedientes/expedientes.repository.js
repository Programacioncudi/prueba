/**
 * Archivo: src/modules/expedientes/expedientes.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para expedientes.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./expedientes.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const expedientesRepository = makeBaseRepository(Model);
export default expedientesRepository;
