
import express from "express";
import { expedientesController } from "./expedientes.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Expedientes
 *   description: Operaciones sobre expedientes
 */

/**
 * @swagger
 * /expedientes:
 *   get:
 *     summary: Listar expedientes
 *     tags: [Expedientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de expedientes
 *   post:
 *     summary: Crear registro de expedientes
 *     tags: [Expedientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /expedientes/{id}:
 *   get:
 *     summary: Obtener expedientes por ID
 *     tags: [Expedientes]
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
 *     summary: Actualizar expedientes por ID
 *     tags: [Expedientes]
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
 *     summary: Eliminar expedientes por ID
 *     tags: [Expedientes]
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

router.get("/", authRequired, allowTo("expedientes:list"), expedientesController.listar);
router.get("/:id", authRequired, allowTo("expedientes:get"), expedientesController.obtener);
router.post("/", authRequired, allowTo("expedientes:create"), expedientesController.crear);
router.put("/:id", authRequired, allowTo("expedientes:update"), expedientesController.actualizar);
router.delete("/:id", authRequired, allowTo("expedientes:delete"), expedientesController.eliminar);

export default router;