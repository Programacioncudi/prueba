/**
 * Archivo: src/modules/funciones/funciones.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para funciones.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./funciones.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const funcionesRepository = makeBaseRepository(Model);
export default funcionesRepository;
