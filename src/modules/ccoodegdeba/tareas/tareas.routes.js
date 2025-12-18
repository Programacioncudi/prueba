
import express from "express";
import { tareasController } from "./tareas.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Operaciones sobre tareas
 */

/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Listar tareas
 *     tags: [Tareas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de tareas
 *   post:
 *     summary: Crear registro de tareas
 *     tags: [Tareas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /tareas/{id}:
 *   get:
 *     summary: Obtener tareas por ID
 *     tags: [Tareas]
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
 *     summary: Actualizar tareas por ID
 *     tags: [Tareas]
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
 *     summary: Eliminar tareas por ID
 *     tags: [Tareas]
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

router.get("/", authRequired, allowTo("tareas:list"), tareasController.listar);
router.get("/:id", authRequired, allowTo("tareas:get"), tareasController.obtener);
router.post("/", authRequired, allowTo("tareas:create"), tareasController.crear);
router.put("/:id", authRequired, allowTo("tareas:update"), tareasController.actualizar);
router.delete("/:id", authRequired, allowTo("tareas:delete"), tareasController.eliminar);

export default router;