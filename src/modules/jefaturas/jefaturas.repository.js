/**
 * Archivo: src/modules/jefaturas/jefaturas.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para jefaturas.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./jefaturas.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const jefaturasRepository = makeBaseRepository(Model);
export default jefaturasRepository;
