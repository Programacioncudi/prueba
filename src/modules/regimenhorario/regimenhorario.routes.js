/**
 * Archivo: src/modules/regimenhorario/regimenhorario.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para regimenhorario.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listRegimenhorario,
  getRegimenhorarioById,
  createRegimenhorario,
  updateRegimenhorario,
  deleteRegimenhorario,
} from "./regimenhorario.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:regimenhorario:listar"), listRegimenhorario);
router.get("/:id", allow("general:regimenhorario:ver"), getRegimenhorarioById);
router.post("/", allow("general:regimenhorario:crear"), createRegimenhorario);
router.put("/:id", allow("general:regimenhorario:editar"), updateRegimenhorario);
router.delete("/:id", allow("general:regimenhorario:eliminar"), deleteRegimenhorario);

export default router;
