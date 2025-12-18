/**
 * Archivo: src/modules/citaciones/citaciones.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para citaciones.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listCitaciones,
  getCitacionesById,
  createCitaciones,
  updateCitaciones,
  deleteCitaciones,
} from "./citaciones.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:citaciones:listar"), listCitaciones);
router.get("/:id", allow("general:citaciones:ver"), getCitacionesById);
router.post("/", allow("general:citaciones:crear"), createCitaciones);
router.put("/:id", allow("general:citaciones:editar"), updateCitaciones);
router.delete("/:id", allow("general:citaciones:eliminar"), deleteCitaciones);

export default router;
