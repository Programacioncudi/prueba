/**
 * Archivo: src/modules/tipoderesolucion/tipoderesolucion.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para tipoderesolucion.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./tipoderesolucion.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const tipoderesolucionRepository = makeBaseRepository(Model);
export default tipoderesolucionRepository;
