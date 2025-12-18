
import express from "express";
import { pedidosController } from "./pedidos.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Operaciones sobre pedidos
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Listar pedidos
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de pedidos
 *   post:
 *     summary: Crear registro de pedidos
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     summary: Obtener pedidos por ID
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *       404:
 *         description: No encontrado
 *   put:
 *     summary: Actualizar pedidos por ID
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro actualizado
 *   delete:
 *     summary: Eliminar pedidos por ID
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro eliminado
 */


const router = express.Router();

router.get("/", authRequired, allowTo("pedidos:list"), pedidosController.listar);
router.get("/:id", authRequired, allowTo("pedidos:get"), pedidosController.obtener);
router.post("/", authRequired, allowTo("pedidos:create"), pedidosController.crear);
router.put("/:id", authRequired, allowTo("pedidos:update"), pedidosController.actualizar);
router.delete("/:id", authRequired, allowTo("pedidos:delete"), pedidosController.eliminar);

export default router;