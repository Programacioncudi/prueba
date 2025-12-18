/**
 * Archivo: src/modules/especialidaddesmedicas/especialidaddesmedicas.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para especialidaddesmedicas.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listEspecialidaddesmedicas,
  getEspecialidaddesmedicasById,
  createEspecialidaddesmedicas,
  updateEspecialidaddesmedicas,
  deleteEspecialidaddesmedicas,
} from "./especialidaddesmedicas.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:especialidaddesmedicas:listar"), listEspecialidaddesmedicas);
router.get("/:id", allow("general:especialidaddesmedicas:ver"), getEspecialidaddesmedicasById);
router.post("/", allow("general:especialidaddesmedicas:crear"), createEspecialidaddesmedicas);
router.put("/:id", allow("general:especialidaddesmedicas:editar"), updateEspecialidaddesmedicas);
router.delete("/:id", allow("general:especialidaddesmedicas:eliminar"), deleteEspecialidaddesmedicas);

export default router;
