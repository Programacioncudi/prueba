/**
 * Archivo: src/modules/tblarchivos/tblarchivos.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para tblarchivos.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listTblarchivos,
  getTblarchivosById,
  createTblarchivos,
  updateTblarchivos,
  deleteTblarchivos,
} from "./tblarchivos.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:tblarchivos:listar"), listTblarchivos);
router.get("/:id", allow("general:tblarchivos:ver"), getTblarchivosById);
router.post("/", allow("general:tblarchivos:crear"), createTblarchivos);
router.put("/:id", allow("general:tblarchivos:editar"), updateTblarchivos);
router.delete("/:id", allow("general:tblarchivos:eliminar"), deleteTblarchivos);

export default router;
