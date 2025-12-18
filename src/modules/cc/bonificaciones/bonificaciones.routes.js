
import express from "express";
import { bonificacionesController } from "./bonificaciones.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Bonificaciones
 *   description: Operaciones sobre bonificaciones
 */

/**
 * @swagger
 * /bonificaciones:
 *   get:
 *     summary: Listar bonificaciones
 *     tags: [Bonificaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de bonificaciones
 *   post:
 *     summary: Crear registro de bonificaciones
 *     tags: [Bonificaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /bonificaciones/{id}:
 *   get:
 *     summary: Obtener bonificaciones por ID
 *     tags: [Bonificaciones]
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
 *     summary: Actualizar bonificaciones por ID
 *     tags: [Bonificaciones]
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
 *     summary: Eliminar bonificaciones por ID
 *     tags: [Bonificaciones]
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

router.get("/", authRequired, allowTo("bonificaciones:list"), bonificacionesController.listar);
router.get("/:id", authRequired, allowTo("bonificaciones:get"), bonificacionesController.obtener);
router.post("/", authRequired, allowTo("bonificaciones:create"), bonificacionesController.crear);
router.put("/:id", authRequired, allowTo("bonificaciones:update"), bonificacionesController.actualizar);
router.delete("/:id", authRequired, allowTo("bonificaciones:delete"), bonificacionesController.eliminar);

export default router;