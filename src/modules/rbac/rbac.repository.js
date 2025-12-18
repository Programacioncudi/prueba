// src/modules/rbac/rbac.repository.js
import { Usuario } from "./rbac.models.js";
import { makeBaseRepository } from "../../database/baseRepository.js";

/**
 * RBAC base repository
 * Se apoya en Usuario como entidad raíz
 */
export const rbacRepository = makeBaseRepository(Usuario);
export default rbacRepository;
