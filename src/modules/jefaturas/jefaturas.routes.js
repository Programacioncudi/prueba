/**
 * Archivo: src/modules/jefaturas/jefaturas.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para jefaturas.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listJefaturas,
  getJefaturasById,
  createJefaturas,
  updateJefaturas,
  deleteJefaturas,
} from "./jefaturas.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:jefaturas:listar"), listJefaturas);
router.get("/:id", allow("general:jefaturas:ver"), getJefaturasById);
router.post("/", allow("general:jefaturas:crear"), createJefaturas);
router.put("/:id", allow("general:jefaturas:editar"), updateJefaturas);
router.delete("/:id", allow("general:jefaturas:eliminar"), deleteJefaturas);

export default router;
