/**
 * Archivo: src/modules/tipodecuidado/tipodecuidado.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para tipodecuidado.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./tipodecuidado.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const tipodecuidadoRepository = makeBaseRepository(Model);
export default tipodecuidadoRepository;
