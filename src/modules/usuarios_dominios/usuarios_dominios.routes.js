/**
 * Archivo: src/modules/usuarios_dominios/usuarios_dominios.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para usuarios_dominios.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listUsuariosDominios,
  getUsuariosDominiosById,
  createUsuariosDominios,
  updateUsuariosDominios,
  deleteUsuariosDominios,
} from "./usuarios_dominios.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("usuarios:dominios:listar"), listUsuariosDominios);
router.get("/:id", allow("usuarios:dominios:ver"), getUsuariosDominiosById);
router.post("/", allow("usuarios:dominios:crear"), createUsuariosDominios);
router.put("/:id", allow("usuarios:dominios:editar"), updateUsuariosDominios);
router.delete("/:id", allow("usuarios:dominios:eliminar"), deleteUsuariosDominios);

export default router;
