/**
 * Archivo: src/modules/planta/planta.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para planta.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listPlanta,
  getPlantaById,
  createPlanta,
  updatePlanta,
  deletePlanta,
} from "./planta.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:planta:listar"), listPlanta);
router.get("/:id", allow("general:planta:ver"), getPlantaById);
router.post("/", allow("general:planta:crear"), createPlanta);
router.put("/:id", allow("general:planta:editar"), updatePlanta);
router.delete("/:id", allow("general:planta:eliminar"), deletePlanta);

export default router;
