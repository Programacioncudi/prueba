/**
 * Archivo: src/modules/categoria/categoria.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para categoria.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./categoria.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const categoriaRepository = makeBaseRepository(Model);
export default categoriaRepository;
