/**
 * Archivo: src/modules/consultas/consultas.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para consultas.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./consultas.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const consultasRepository = makeBaseRepository(Model);
export default consultasRepository;
