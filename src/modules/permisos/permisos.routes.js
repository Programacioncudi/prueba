/**
 * Archivo: src/modules/permisos/permisos.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para permisos.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listPermisos,
  getPermisosById,
  createPermisos,
  updatePermisos,
  deletePermisos,
} from "./permisos.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:permisos:listar"), listPermisos);
router.get("/:id", allow("general:permisos:ver"), getPermisosById);
router.post("/", allow("general:permisos:crear"), createPermisos);
router.put("/:id", allow("general:permisos:editar"), updatePermisos);
router.delete("/:id", allow("general:permisos:eliminar"), deletePermisos);

export default router;
