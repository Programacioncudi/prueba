/**
 * Archivo: src/modules/tareasadquiridias/tareasadquiridias.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para tareasadquiridias.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./tareasadquiridias.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const tareasadquiridiasRepository = makeBaseRepository(Model);
export default tareasadquiridiasRepository;
