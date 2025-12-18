/**
 * Archivo: src/modules/codigoa/codigoa.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para codigoa.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./codigoa.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const codigoaRepository = makeBaseRepository(Model);
export default codigoaRepository;
