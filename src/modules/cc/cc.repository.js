/**
 * Archivo: src/modules/cc/cc.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para cc.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./cc.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const ccRepository = makeBaseRepository(Model);
export default ccRepository;
