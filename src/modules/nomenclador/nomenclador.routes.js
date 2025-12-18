/**
 * Archivo: src/modules/nomenclador/nomenclador.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para nomenclador.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listNomenclador,
  getNomencladorById,
  createNomenclador,
  updateNomenclador,
  deleteNomenclador,
} from "./nomenclador.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:nomenclador:listar"), listNomenclador);
router.get("/:id", allow("general:nomenclador:ver"), getNomencladorById);
router.post("/", allow("general:nomenclador:crear"), createNomenclador);
router.put("/:id", allow("general:nomenclador:editar"), updateNomenclador);
router.delete("/:id", allow("general:nomenclador:eliminar"), deleteNomenclador);

export default router;
