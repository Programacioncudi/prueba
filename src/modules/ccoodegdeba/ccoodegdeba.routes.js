
import express from "express";
import { ccoodegdebaController } from "./ccoodegdeba.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Ccoodegdeba
 *   description: Operaciones sobre ccoodegdeba
 */

/**
 * @swagger
 * /ccoodegdeba:
 *   get:
 *     summary: Listar ccoodegdeba
 *     tags: [Ccoodegdeba]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de ccoodegdeba
 *   post:
 *     summary: Crear registro de ccoodegdeba
 *     tags: [Ccoodegdeba]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /ccoodegdeba/{id}:
 *   get:
 *     summary: Obtener ccoodegdeba por ID
 *     tags: [Ccoodegdeba]
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
 *     summary: Actualizar ccoodegdeba por ID
 *     tags: [Ccoodegdeba]
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
 *     summary: Eliminar ccoodegdeba por ID
 *     tags: [Ccoodegdeba]
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

router.get("/", authRequired, allowTo("ccoodegdeba:list"), ccoodegdebaController.listar);
router.get("/:id", authRequired, allowTo("ccoodegdeba:get"), ccoodegdebaController.obtener);
router.post("/", authRequired, allowTo("ccoodegdeba:create"), ccoodegdebaController.crear);
router.put("/:id", authRequired, allowTo("ccoodegdeba:update"), ccoodegdebaController.actualizar);
router.delete("/:id", authRequired, allowTo("ccoodegdeba:delete"), ccoodegdebaController.eliminar);

export default router;