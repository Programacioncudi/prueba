/**
 * Archivo: src/modules/resoluciones/resoluciones.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para resoluciones.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listResoluciones,
  getResolucionesById,
  createResoluciones,
  updateResoluciones,
  deleteResoluciones,
} from "./resoluciones.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:resoluciones:listar"), listResoluciones);
router.get("/:id", allow("general:resoluciones:ver"), getResolucionesById);
router.post("/", allow("general:resoluciones:crear"), createResoluciones);
router.put("/:id", allow("general:resoluciones:editar"), updateResoluciones);
router.delete("/:id", allow("general:resoluciones:eliminar"), deleteResoluciones);

export default router;
