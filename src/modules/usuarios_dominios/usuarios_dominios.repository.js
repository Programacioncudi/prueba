/**
 * Archivo: src/modules/usuarios_dominios/usuarios_dominios.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para usuarios_dominios.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./usuarios_dominios.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const usuarios_dominiosRepository = makeBaseRepository(Model);
export default usuarios_dominiosRepository;
