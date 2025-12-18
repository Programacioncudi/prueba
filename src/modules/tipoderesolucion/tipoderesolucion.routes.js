/**
 * Archivo: src/modules/tipoderesolucion/tipoderesolucion.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para tipoderesolucion.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listTipoderesolucion,
  getTipoderesolucionById,
  createTipoderesolucion,
  updateTipoderesolucion,
  deleteTipoderesolucion,
} from "./tipoderesolucion.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:tipoderesolucion:listar"), listTipoderesolucion);
router.get("/:id", allow("general:tipoderesolucion:ver"), getTipoderesolucionById);
router.post("/", allow("general:tipoderesolucion:crear"), createTipoderesolucion);
router.put("/:id", allow("general:tipoderesolucion:editar"), updateTipoderesolucion);
router.delete("/:id", allow("general:tipoderesolucion:eliminar"), deleteTipoderesolucion);

export default router;
