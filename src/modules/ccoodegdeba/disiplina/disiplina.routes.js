
import express from "express";
import { disiplinaController } from "./disiplina.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Disiplina
 *   description: Operaciones sobre disiplina
 */

/**
 * @swagger
 * /disiplina:
 *   get:
 *     summary: Listar disiplina
 *     tags: [Disiplina]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de disiplina
 *   post:
 *     summary: Crear registro de disiplina
 *     tags: [Disiplina]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /disiplina/{id}:
 *   get:
 *     summary: Obtener disiplina por ID
 *     tags: [Disiplina]
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
 *     summary: Actualizar disiplina por ID
 *     tags: [Disiplina]
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
 *     summary: Eliminar disiplina por ID
 *     tags: [Disiplina]
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

router.get("/", authRequired, allowTo("disiplina:list"), disiplinaController.listar);
router.get("/:id", authRequired, allowTo("disiplina:get"), disiplinaController.obtener);
router.post("/", authRequired, allowTo("disiplina:create"), disiplinaController.crear);
router.put("/:id", authRequired, allowTo("disiplina:update"), disiplinaController.actualizar);
router.delete("/:id", authRequired, allowTo("disiplina:delete"), disiplinaController.eliminar);

export default router;