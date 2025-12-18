/**
 * Archivo: src/modules/reparticiones/reparticiones.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para reparticiones.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listReparticiones,
  getReparticionesById,
  createReparticiones,
  updateReparticiones,
  deleteReparticiones,
} from "./reparticiones.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:reparticiones:listar"), listReparticiones);
router.get("/:id", allow("general:reparticiones:ver"), getReparticionesById);
router.post("/", allow("general:reparticiones:crear"), createReparticiones);
router.put("/:id", allow("general:reparticiones:editar"), updateReparticiones);
router.delete("/:id", allow("general:reparticiones:eliminar"), deleteReparticiones);

export default router;
