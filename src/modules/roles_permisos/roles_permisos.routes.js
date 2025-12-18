/**
 * Archivo: src/modules/roles_permisos/roles_permisos.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para roles_permisos.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listRolesPermisos,
  getRolesPermisosById,
  createRolesPermisos,
  updateRolesPermisos,
  deleteRolesPermisos,
} from "./roles_permisos.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("roles:permisos:listar"), listRolesPermisos);
router.get("/:id", allow("roles:permisos:ver"), getRolesPermisosById);
router.post("/", allow("roles:permisos:crear"), createRolesPermisos);
router.put("/:id", allow("roles:permisos:editar"), updateRolesPermisos);
router.delete("/:id", allow("roles:permisos:eliminar"), deleteRolesPermisos);

export default router;
