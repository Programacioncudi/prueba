
import express from "express";
import { ministeriosController } from "./ministerios.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Ministerios
 *   description: Operaciones sobre ministerios
 */

/**
 * @swagger
 * /ministerios:
 *   get:
 *     summary: Listar ministerios
 *     tags: [Ministerios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de ministerios
 *   post:
 *     summary: Crear registro de ministerios
 *     tags: [Ministerios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /ministerios/{id}:
 *   get:
 *     summary: Obtener ministerios por ID
 *     tags: [Ministerios]
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
 *     summary: Actualizar ministerios por ID
 *     tags: [Ministerios]
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
 *     summary: Eliminar ministerios por ID
 *     tags: [Ministerios]
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

router.get("/", authRequired, allowTo("ministerios:list"), ministeriosController.listar);
router.get("/:id", authRequired, allowTo("ministerios:get"), ministeriosController.obtener);
router.post("/", authRequired, allowTo("ministerios:create"), ministeriosController.crear);
router.put("/:id", authRequired, allowTo("ministerios:update"), ministeriosController.actualizar);
router.delete("/:id", authRequired, allowTo("ministerios:delete"), ministeriosController.eliminar);

export default router;