/**
 * Archivo: src/modules/funciones/funciones.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para funciones.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listFunciones,
  getFuncionesById,
  createFunciones,
  updateFunciones,
  deleteFunciones,
} from "./funciones.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:funciones:listar"), listFunciones);
router.get("/:id", allow("general:funciones:ver"), getFuncionesById);
router.post("/", allow("general:funciones:crear"), createFunciones);
router.put("/:id", allow("general:funciones:editar"), updateFunciones);
router.delete("/:id", allow("general:funciones:eliminar"), deleteFunciones);

export default router;
