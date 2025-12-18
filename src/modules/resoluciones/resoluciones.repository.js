/**
 * Archivo: src/modules/resoluciones/resoluciones.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para resoluciones.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./resoluciones.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const resolucionesRepository = makeBaseRepository(Model);
export default resolucionesRepository;
