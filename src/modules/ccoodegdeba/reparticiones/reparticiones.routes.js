
import express from "express";
import { reparticionesController } from "./reparticiones.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Reparticiones
 *   description: Operaciones sobre reparticiones
 */

/**
 * @swagger
 * /reparticiones:
 *   get:
 *     summary: Listar reparticiones
 *     tags: [Reparticiones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de reparticiones
 *   post:
 *     summary: Crear registro de reparticiones
 *     tags: [Reparticiones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /reparticiones/{id}:
 *   get:
 *     summary: Obtener reparticiones por ID
 *     tags: [Reparticiones]
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
 *     summary: Actualizar reparticiones por ID
 *     tags: [Reparticiones]
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
 *     summary: Eliminar reparticiones por ID
 *     tags: [Reparticiones]
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

router.get("/", authRequired, allowTo("reparticiones:list"), reparticionesController.listar);
router.get("/:id", authRequired, allowTo("reparticiones:get"), reparticionesController.obtener);
router.post("/", authRequired, allowTo("reparticiones:create"), reparticionesController.crear);
router.put("/:id", authRequired, allowTo("reparticiones:update"), reparticionesController.actualizar);
router.delete("/:id", authRequired, allowTo("reparticiones:delete"), reparticionesController.eliminar);

export default router;