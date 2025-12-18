/**
 * Archivo: src/modules/tareasadquiridias/tareasadquiridias.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para tareasadquiridias.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listTareasadquiridias,
  getTareasadquiridiasById,
  createTareasadquiridias,
  updateTareasadquiridias,
  deleteTareasadquiridias,
} from "./tareasadquiridias.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:tareasadquiridias:listar"), listTareasadquiridias);
router.get("/:id", allow("general:tareasadquiridias:ver"), getTareasadquiridiasById);
router.post("/", allow("general:tareasadquiridias:crear"), createTareasadquiridias);
router.put("/:id", allow("general:tareasadquiridias:editar"), updateTareasadquiridias);
router.delete("/:id", allow("general:tareasadquiridias:eliminar"), deleteTareasadquiridias);

export default router;
