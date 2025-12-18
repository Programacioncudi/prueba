/**
 * Archivo: src/modules/disiplina/disiplina.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para disiplina.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listDisiplina,
  getDisiplinaById,
  createDisiplina,
  updateDisiplina,
  deleteDisiplina,
} from "./disiplina.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:disiplina:listar"), listDisiplina);
router.get("/:id", allow("general:disiplina:ver"), getDisiplinaById);
router.post("/", allow("general:disiplina:crear"), createDisiplina);
router.put("/:id", allow("general:disiplina:editar"), updateDisiplina);
router.delete("/:id", allow("general:disiplina:eliminar"), deleteDisiplina);

export default router;
