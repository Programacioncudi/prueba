/**
 * Archivo: src/modules/nomenclador/nomenclador.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para nomenclador.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./nomenclador.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const nomencladorRepository = makeBaseRepository(Model);
export default nomencladorRepository;
