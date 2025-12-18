/**
 * Archivo: src/modules/ministerios/ministerios.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para ministerios.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./ministerios.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const ministeriosRepository = makeBaseRepository(Model);
export default ministeriosRepository;
