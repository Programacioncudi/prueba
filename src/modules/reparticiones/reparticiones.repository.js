/**
 * Archivo: src/modules/reparticiones/reparticiones.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para reparticiones.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./reparticiones.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const reparticionesRepository = makeBaseRepository(Model);
export default reparticionesRepository;
