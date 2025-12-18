/**
 * Archivo: src/modules/ccoodegdeba/ccoodegdeba.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para ccoodegdeba.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./ccoodegdeba.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const ccoodegdebaRepository = makeBaseRepository(Model);
export default ccoodegdebaRepository;
