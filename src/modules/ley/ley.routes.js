/**
 * Archivo: src/modules/ley/ley.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para ley.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listLey,
  getLeyById,
  createLey,
  updateLey,
  deleteLey,
} from "./ley.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:ley:listar"), listLey);
router.get("/:id", allow("general:ley:ver"), getLeyById);
router.post("/", allow("general:ley:crear"), createLey);
router.put("/:id", allow("general:ley:editar"), updateLey);
router.delete("/:id", allow("general:ley:eliminar"), deleteLey);

export default router;
