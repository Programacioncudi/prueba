/**
 * Archivo: src/modules/categoria/categoria.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para categoria.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listCategoria,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "./categoria.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:categoria:listar"), listCategoria);
router.get("/:id", allow("general:categoria:ver"), getCategoriaById);
router.post("/", allow("general:categoria:crear"), createCategoria);
router.put("/:id", allow("general:categoria:editar"), updateCategoria);
router.delete("/:id", allow("general:categoria:eliminar"), deleteCategoria);

export default router;
