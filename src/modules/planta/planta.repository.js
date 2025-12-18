/**
 * Archivo: src/modules/planta/planta.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para planta.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./planta.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const plantaRepository = makeBaseRepository(Model);
export default plantaRepository;
