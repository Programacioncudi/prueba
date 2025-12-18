/**
 * Archivo: src/modules/sexo/sexo.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para sexo.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./sexo.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const sexoRepository = makeBaseRepository(Model);
export default sexoRepository;
