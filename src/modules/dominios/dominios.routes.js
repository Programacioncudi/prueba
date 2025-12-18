/**
 * Archivo: src/modules/dominios/dominios.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para dominios.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listDominios,
  getDominiosById,
  createDominios,
  updateDominios,
  deleteDominios,
} from "./dominios.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:dominios:listar"), listDominios);
router.get("/:id", allow("general:dominios:ver"), getDominiosById);
router.post("/", allow("general:dominios:crear"), createDominios);
router.put("/:id", allow("general:dominios:editar"), updateDominios);
router.delete("/:id", allow("general:dominios:eliminar"), deleteDominios);

export default router;
