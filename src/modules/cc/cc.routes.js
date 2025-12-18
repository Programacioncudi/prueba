/**
 * Archivo: src/modules/cc/cc.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para cc.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listCc,
  getCcById,
  createCc,
  updateCc,
  deleteCc,
} from "./cc.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:cc:listar"), listCc);
router.get("/:id", allow("general:cc:ver"), getCcById);
router.post("/", allow("general:cc:crear"), createCc);
router.put("/:id", allow("general:cc:editar"), updateCc);
router.delete("/:id", allow("general:cc:eliminar"), deleteCc);

export default router;
