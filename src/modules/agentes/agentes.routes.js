/**
 * Archivo: src/modules/agentes/agentes.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para agentes.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listAgentes,
  getAgentesById,
  createAgentes,
  updateAgentes,
  deleteAgentes,
} from "./agentes.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:agentes:listar"), listAgentes);
router.get("/:id", allow("general:agentes:ver"), getAgentesById);
router.post("/", allow("general:agentes:crear"), createAgentes);
router.put("/:id", allow("general:agentes:editar"), updateAgentes);
router.delete("/:id", allow("general:agentes:eliminar"), deleteAgentes);

export default router;
