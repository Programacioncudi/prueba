
import express from "express";
import { ccController } from "./cc.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Cc
 *   description: Operaciones sobre cc
 */

/**
 * @swagger
 * /cc:
 *   get:
 *     summary: Listar cc
 *     tags: [Cc]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de cc
 *   post:
 *     summary: Crear registro de cc
 *     tags: [Cc]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /cc/{id}:
 *   get:
 *     summary: Obtener cc por ID
 *     tags: [Cc]
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
 *     summary: Actualizar cc por ID
 *     tags: [Cc]
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
 *     summary: Eliminar cc por ID
 *     tags: [Cc]
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

router.get("/", authRequired, allowTo("cc:list"), ccController.listar);
router.get("/:id", authRequired, allowTo("cc:get"), ccController.obtener);
router.post("/", authRequired, allowTo("cc:create"), ccController.crear);
router.put("/:id", authRequired, allowTo("cc:update"), ccController.actualizar);
router.delete("/:id", authRequired, allowTo("cc:delete"), ccController.eliminar);

export default router;