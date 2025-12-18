/**
 * Archivo: src/modules/roles/roles.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para roles.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listRoles,
  getRolesById,
  createRoles,
  updateRoles,
  deleteRoles,
} from "./roles.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:roles:listar"), listRoles);
router.get("/:id", allow("general:roles:ver"), getRolesById);
router.post("/", allow("general:roles:crear"), createRoles);
router.put("/:id", allow("general:roles:editar"), updateRoles);
router.delete("/:id", allow("general:roles:eliminar"), deleteRoles);

export default router;
