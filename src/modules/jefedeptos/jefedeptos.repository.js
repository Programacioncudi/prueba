/**
 * Archivo: src/modules/jefedeptos/jefedeptos.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para jefedeptos.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./jefedeptos.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const jefedeptosRepository = makeBaseRepository(Model);
export default jefedeptosRepository;
