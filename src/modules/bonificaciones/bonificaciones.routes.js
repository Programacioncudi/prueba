/**
 * Archivo: src/modules/bonificaciones/bonificaciones.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para bonificaciones.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listBonificaciones,
  getBonificacionesById,
  createBonificaciones,
  updateBonificaciones,
  deleteBonificaciones,
} from "./bonificaciones.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:bonificaciones:listar"), listBonificaciones);
router.get("/:id", allow("general:bonificaciones:ver"), getBonificacionesById);
router.post("/", allow("general:bonificaciones:crear"), createBonificaciones);
router.put("/:id", allow("general:bonificaciones:editar"), updateBonificaciones);
router.delete("/:id", allow("general:bonificaciones:eliminar"), deleteBonificaciones);

export default router;
