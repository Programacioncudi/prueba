/**
 * Archivo: src/modules/pedidos/pedidos.repository.js
 * Responsabilidad:
 *   - Acceso a datos enterprise (Sequelize) para pedidos.
 *   - list() soporta paginación/filtros/orden por baseRepository.
 */
import Model from "./pedidos.model.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

export const pedidosRepository = makeBaseRepository(Model);
export default pedidosRepository;
