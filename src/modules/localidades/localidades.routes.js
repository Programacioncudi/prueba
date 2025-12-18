/**
 * Archivo: src/modules/localidades/localidades.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para localidades.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listLocalidades,
  getLocalidadesById,
  createLocalidades,
  updateLocalidades,
  deleteLocalidades,
} from "./localidades.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:localidades:listar"), listLocalidades);
router.get("/:id", allow("general:localidades:ver"), getLocalidadesById);
router.post("/", allow("general:localidades:crear"), createLocalidades);
router.put("/:id", allow("general:localidades:editar"), updateLocalidades);
router.delete("/:id", allow("general:localidades:eliminar"), deleteLocalidades);

export default router;
