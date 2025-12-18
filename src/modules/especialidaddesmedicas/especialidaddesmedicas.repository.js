/**
 * Archivo: src/modules/especialidaddesmedicas/especialidaddesmedicas.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para especialidaddesmedicas.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./especialidaddesmedicas.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const especialidaddesmedicasRepository = makeBaseRepository(Model);
export default especialidaddesmedicasRepository;
