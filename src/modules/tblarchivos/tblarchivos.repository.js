/**
 * Archivo: src/modules/tblarchivos/tblarchivos.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para tblarchivos.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./tblarchivos.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const tblarchivosRepository = makeBaseRepository(Model);
export default tblarchivosRepository;
