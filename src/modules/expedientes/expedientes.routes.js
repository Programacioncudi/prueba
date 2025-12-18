/**
 * Archivo: src/modules/expedientes/expedientes.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para expedientes.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listExpedientes,
  getExpedientesById,
  createExpedientes,
  updateExpedientes,
  deleteExpedientes,
} from "./expedientes.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:expedientes:listar"), listExpedientes);
router.get("/:id", allow("general:expedientes:ver"), getExpedientesById);
router.post("/", allow("general:expedientes:crear"), createExpedientes);
router.put("/:id", allow("general:expedientes:editar"), updateExpedientes);
router.delete("/:id", allow("general:expedientes:eliminar"), deleteExpedientes);

export default router;
