/**
 * Archivo: src/modules/personal/personal.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para personal.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listPersonal,
  getPersonalById,
  createPersonal,
  updatePersonal,
  deletePersonal,
} from "./personal.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:personal:listar"), listPersonal);
router.get("/:id", allow("general:personal:ver"), getPersonalById);
router.post("/", allow("general:personal:crear"), createPersonal);
router.put("/:id", allow("general:personal:editar"), updatePersonal);
router.delete("/:id", allow("general:personal:eliminar"), deletePersonal);

export default router;
