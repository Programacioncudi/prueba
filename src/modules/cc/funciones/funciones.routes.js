
import express from "express";
import { funcionesController } from "./funciones.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Funciones
 *   description: Operaciones sobre funciones
 */

/**
 * @swagger
 * /funciones:
 *   get:
 *     summary: Listar funciones
 *     tags: [Funciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de funciones
 *   post:
 *     summary: Crear registro de funciones
 *     tags: [Funciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /funciones/{id}:
 *   get:
 *     summary: Obtener funciones por ID
 *     tags: [Funciones]
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
 *     summary: Actualizar funciones por ID
 *     tags: [Funciones]
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
 *     summary: Eliminar funciones por ID
 *     tags: [Funciones]
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

router.get("/", authRequired, allowTo("funciones:list"), funcionesController.listar);
router.get("/:id", authRequired, allowTo("funciones:get"), funcionesController.obtener);
router.post("/", authRequired, allowTo("funciones:create"), funcionesController.crear);
router.put("/:id", authRequired, allowTo("funciones:update"), funcionesController.actualizar);
router.delete("/:id", authRequired, allowTo("funciones:delete"), funcionesController.eliminar);

export default router;