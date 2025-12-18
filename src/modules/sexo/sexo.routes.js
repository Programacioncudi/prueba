/**
 * Archivo: src/modules/sexo/sexo.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para sexo.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listSexo,
  getSexoById,
  createSexo,
  updateSexo,
  deleteSexo,
} from "./sexo.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:sexo:listar"), listSexo);
router.get("/:id", allow("general:sexo:ver"), getSexoById);
router.post("/", allow("general:sexo:crear"), createSexo);
router.put("/:id", allow("general:sexo:editar"), updateSexo);
router.delete("/:id", allow("general:sexo:eliminar"), deleteSexo);

export default router;
