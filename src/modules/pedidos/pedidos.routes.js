/**
 * Archivo: src/modules/pedidos/pedidos.routes.js
 * Responsabilidad:
 *   - Rutas REST enterprise (JWT + RBAC) para pedidos.
 */
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allow } from "../../middleware/permission.middleware.js";
import { requestContextMiddleware } from "../../middleware/requestContext.middleware.js";

import {
  listPedidos,
  getPedidosById,
  createPedidos,
  updatePedidos,
  deletePedidos,
} from "./pedidos.controller.js";

const router = Router();

router.use(authRequired, requestContextMiddleware);

router.get("/", allow("general:pedidos:listar"), listPedidos);
router.get("/:id", allow("general:pedidos:ver"), getPedidosById);
router.post("/", allow("general:pedidos:crear"), createPedidos);
router.put("/:id", allow("general:pedidos:editar"), updatePedidos);
router.delete("/:id", allow("general:pedidos:eliminar"), deletePedidos);

export default router;
