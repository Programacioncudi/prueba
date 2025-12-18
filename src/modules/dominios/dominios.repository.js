/**
 * Archivo: src/modules/dominios/dominios.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para dominios.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./dominios.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const dominiosRepository = makeBaseRepository(Model);
export default dominiosRepository;
