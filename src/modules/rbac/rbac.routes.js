/**
 * Archivo: src/modules/rbac/rbac.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para rbac.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listRbac,
  getRbacById,
  createRbac,
  updateRbac,
  deleteRbac,
} from "./rbac.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:rbac:listar"), listRbac);
router.get("/:id", allow("general:rbac:ver"), getRbacById);
router.post("/", allow("general:rbac:crear"), createRbac);
router.put("/:id", allow("general:rbac:editar"), updateRbac);
router.delete("/:id", allow("general:rbac:eliminar"), deleteRbac);

export default router;
