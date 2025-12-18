/**
 * Archivo: src/modules/jefedeptos/jefedeptos.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para jefedeptos.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listJefedeptos,
  getJefedeptosById,
  createJefedeptos,
  updateJefedeptos,
  deleteJefedeptos,
} from "./jefedeptos.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:jefedeptos:listar"), listJefedeptos);
router.get("/:id", allow("general:jefedeptos:ver"), getJefedeptosById);
router.post("/", allow("general:jefedeptos:crear"), createJefedeptos);
router.put("/:id", allow("general:jefedeptos:editar"), updateJefedeptos);
router.delete("/:id", allow("general:jefedeptos:eliminar"), deleteJefedeptos);

export default router;
