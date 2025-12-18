/**
 * Archivo: src/modules/consultas/consultas.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para consultas.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listConsultas,
  getConsultasById,
  createConsultas,
  updateConsultas,
  deleteConsultas,
} from "./consultas.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:consultas:listar"), listConsultas);
router.get("/:id", allow("general:consultas:ver"), getConsultasById);
router.post("/", allow("general:consultas:crear"), createConsultas);
router.put("/:id", allow("general:consultas:editar"), updateConsultas);
router.delete("/:id", allow("general:consultas:eliminar"), deleteConsultas);

export default router;
