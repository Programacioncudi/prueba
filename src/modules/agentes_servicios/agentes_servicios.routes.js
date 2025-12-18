/**
 * Archivo: src/modules/agentes_servicios/agentes_servicios.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para agentes_servicios.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listAgentesServicios,
  getAgentesServiciosById,
  createAgentesServicios,
  updateAgentesServicios,
  deleteAgentesServicios,
} from "./agentes_servicios.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("agentes:servicios:listar"), listAgentesServicios);
router.get("/:id", allow("agentes:servicios:ver"), getAgentesServiciosById);
router.post("/", allow("agentes:servicios:crear"), createAgentesServicios);
router.put("/:id", allow("agentes:servicios:editar"), updateAgentesServicios);
router.delete("/:id", allow("agentes:servicios:eliminar"), deleteAgentesServicios);

export default router;
