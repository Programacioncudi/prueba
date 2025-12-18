/**
 * Archivo: src/modules/inconvenientesagentes/inconvenientesagentes.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para inconvenientesagentes.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./inconvenientesagentes.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const inconvenientesagentesRepository = makeBaseRepository(Model);
export default inconvenientesagentesRepository;
