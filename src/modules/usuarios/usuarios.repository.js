/**
 * Archivo: src/modules/usuarios/usuarios.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para usuarios.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./usuarios.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const usuariosRepository = makeBaseRepository(Model);
export default usuariosRepository;
