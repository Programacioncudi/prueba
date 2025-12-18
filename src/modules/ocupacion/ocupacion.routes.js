/**
 * Archivo: src/modules/ocupacion/ocupacion.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para ocupacion.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listOcupacion,
  getOcupacionById,
  createOcupacion,
  updateOcupacion,
  deleteOcupacion,
} from "./ocupacion.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:ocupacion:listar"), listOcupacion);
router.get("/:id", allow("general:ocupacion:ver"), getOcupacionById);
router.post("/", allow("general:ocupacion:crear"), createOcupacion);
router.put("/:id", allow("general:ocupacion:editar"), updateOcupacion);
router.delete("/:id", allow("general:ocupacion:eliminar"), deleteOcupacion);

export default router;
