/**
 * Archivo: src/modules/ordenesdetrabajo/ordenesdetrabajo.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para ordenesdetrabajo.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./ordenesdetrabajo.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const ordenesdetrabajoRepository = makeBaseRepository(Model);
export default ordenesdetrabajoRepository;
