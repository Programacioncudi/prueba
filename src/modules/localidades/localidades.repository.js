/**
 * Archivo: src/modules/localidades/localidades.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para localidades.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./localidades.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const localidadesRepository = makeBaseRepository(Model);
export default localidadesRepository;
