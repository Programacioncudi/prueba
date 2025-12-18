/**
 * Archivo: src/modules/agentes/agentes.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para agentes.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./agentes.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const agentesRepository = makeBaseRepository(Model);
export default agentesRepository;
