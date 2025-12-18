/**
 * Archivo: src/modules/tipodecuidado/tipodecuidado.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para tipodecuidado.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listTipodecuidado,
  getTipodecuidadoById,
  createTipodecuidado,
  updateTipodecuidado,
  deleteTipodecuidado,
} from "./tipodecuidado.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:tipodecuidado:listar"), listTipodecuidado);
router.get("/:id", allow("general:tipodecuidado:ver"), getTipodecuidadoById);
router.post("/", allow("general:tipodecuidado:crear"), createTipodecuidado);
router.put("/:id", allow("general:tipodecuidado:editar"), updateTipodecuidado);
router.delete("/:id", allow("general:tipodecuidado:eliminar"), deleteTipodecuidado);

export default router;
