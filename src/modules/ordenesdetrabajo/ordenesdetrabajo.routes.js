/**
 * Archivo: src/modules/ordenesdetrabajo/ordenesdetrabajo.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para ordenesdetrabajo.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listOrdenesdetrabajo,
  getOrdenesdetrabajoById,
  createOrdenesdetrabajo,
  updateOrdenesdetrabajo,
  deleteOrdenesdetrabajo,
} from "./ordenesdetrabajo.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:ordenesdetrabajo:listar"), listOrdenesdetrabajo);
router.get("/:id", allow("general:ordenesdetrabajo:ver"), getOrdenesdetrabajoById);
router.post("/", allow("general:ordenesdetrabajo:crear"), createOrdenesdetrabajo);
router.put("/:id", allow("general:ordenesdetrabajo:editar"), updateOrdenesdetrabajo);
router.delete("/:id", allow("general:ordenesdetrabajo:eliminar"), deleteOrdenesdetrabajo);

export default router;
