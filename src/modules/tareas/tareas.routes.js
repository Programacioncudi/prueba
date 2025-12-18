/**
 * Archivo: src/modules/tareas/tareas.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para tareas.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listTareas,
  getTareasById,
  createTareas,
  updateTareas,
  deleteTareas,
} from "./tareas.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:tareas:listar"), listTareas);
router.get("/:id", allow("general:tareas:ver"), getTareasById);
router.post("/", allow("general:tareas:crear"), createTareas);
router.put("/:id", allow("general:tareas:editar"), updateTareas);
router.delete("/:id", allow("general:tareas:eliminar"), deleteTareas);

export default router;
