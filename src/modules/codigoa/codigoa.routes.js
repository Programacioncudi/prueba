/**
 * Archivo: src/modules/codigoa/codigoa.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para codigoa.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listCodigoa,
  getCodigoaById,
  createCodigoa,
  updateCodigoa,
  deleteCodigoa,
} from "./codigoa.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:codigoa:listar"), listCodigoa);
router.get("/:id", allow("general:codigoa:ver"), getCodigoaById);
router.post("/", allow("general:codigoa:crear"), createCodigoa);
router.put("/:id", allow("general:codigoa:editar"), updateCodigoa);
router.delete("/:id", allow("general:codigoa:eliminar"), deleteCodigoa);

export default router;
