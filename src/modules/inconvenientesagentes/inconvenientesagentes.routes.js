/**
 * Archivo: src/modules/inconvenientesagentes/inconvenientesagentes.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para inconvenientesagentes.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listInconvenientesagentes,
  getInconvenientesagentesById,
  createInconvenientesagentes,
  updateInconvenientesagentes,
  deleteInconvenientesagentes,
} from "./inconvenientesagentes.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:inconvenientesagentes:listar"), listInconvenientesagentes);
router.get("/:id", allow("general:inconvenientesagentes:ver"), getInconvenientesagentesById);
router.post("/", allow("general:inconvenientesagentes:crear"), createInconvenientesagentes);
router.put("/:id", allow("general:inconvenientesagentes:editar"), updateInconvenientesagentes);
router.delete("/:id", allow("general:inconvenientesagentes:eliminar"), deleteInconvenientesagentes);

export default router;
