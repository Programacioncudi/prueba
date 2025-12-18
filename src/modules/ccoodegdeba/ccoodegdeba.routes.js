/**
 * Archivo: src/modules/ccoodegdeba/ccoodegdeba.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para ccoodegdeba.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listCcoodegdeba,
  getCcoodegdebaById,
  createCcoodegdeba,
  updateCcoodegdeba,
  deleteCcoodegdeba,
} from "./ccoodegdeba.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:ccoodegdeba:listar"), listCcoodegdeba);
router.get("/:id", allow("general:ccoodegdeba:ver"), getCcoodegdebaById);
router.post("/", allow("general:ccoodegdeba:crear"), createCcoodegdeba);
router.put("/:id", allow("general:ccoodegdeba:editar"), updateCcoodegdeba);
router.delete("/:id", allow("general:ccoodegdeba:eliminar"), deleteCcoodegdeba);

export default router;
