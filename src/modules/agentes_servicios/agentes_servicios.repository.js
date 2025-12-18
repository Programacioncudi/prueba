/**
 * Archivo: src/modules/agentes_servicios/agentes_servicios.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para agentes_servicios.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./agentes_servicios.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const agentes_serviciosRepository = makeBaseRepository(Model);
export default agentes_serviciosRepository;
