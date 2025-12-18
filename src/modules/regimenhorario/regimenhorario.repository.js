/**
 * Archivo: src/modules/regimenhorario/regimenhorario.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para regimenhorario.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./regimenhorario.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const regimenhorarioRepository = makeBaseRepository(Model);
export default regimenhorarioRepository;
