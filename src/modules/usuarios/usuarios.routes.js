/**
 * Archivo: src/modules/usuarios/usuarios.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para usuarios.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listUsuarios,
  getUsuariosById,
  createUsuarios,
  updateUsuarios,
  deleteUsuarios,
} from "./usuarios.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:usuarios:listar"), listUsuarios);
router.get("/:id", allow("general:usuarios:ver"), getUsuariosById);
router.post("/", allow("general:usuarios:crear"), createUsuarios);
router.put("/:id", allow("general:usuarios:editar"), updateUsuarios);
router.delete("/:id", allow("general:usuarios:eliminar"), deleteUsuarios);

export default router;
