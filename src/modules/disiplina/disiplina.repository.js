/**
 * Archivo: src/modules/disiplina/disiplina.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para disiplina.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./disiplina.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const disiplinaRepository = makeBaseRepository(Model);
export default disiplinaRepository;
