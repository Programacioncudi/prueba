/**
 * Archivo: src/modules/ministerios/ministerios.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para ministerios.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listMinisterios,
  getMinisteriosById,
  createMinisterios,
  updateMinisterios,
  deleteMinisterios,
} from "./ministerios.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:ministerios:listar"), listMinisterios);
router.get("/:id", allow("general:ministerios:ver"), getMinisteriosById);
router.post("/", allow("general:ministerios:crear"), createMinisterios);
router.put("/:id", allow("general:ministerios:editar"), updateMinisterios);
router.delete("/:id", allow("general:ministerios:eliminar"), deleteMinisterios);

export default router;
