
import express from "express";
import { tipoderesolucionController } from "./tipoderesolucion.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Tipoderesolucion
 *   description: Operaciones sobre tipoderesolucion
 */

/**
 * @swagger
 * /tipoderesolucion:
 *   get:
 *     summary: Listar tipoderesolucion
 *     tags: [Tipoderesolucion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de tipoderesolucion
 *   post:
 *     summary: Crear registro de tipoderesolucion
 *     tags: [Tipoderesolucion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /tipoderesolucion/{id}:
 *   get:
 *     summary: Obtener tipoderesolucion por ID
 *     tags: [Tipoderesolucion]
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
 *     summary: Actualizar tipoderesolucion por ID
 *     tags: [Tipoderesolucion]
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
 *     summary: Eliminar tipoderesolucion por ID
 *     tags: [Tipoderesolucion]
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

router.get("/", authRequired, allowTo("tipoderesolucion:list"), tipoderesolucionController.listar);
router.get("/:id", authRequired, allowTo("tipoderesolucion:get"), tipoderesolucionController.obtener);
router.post("/", authRequired, allowTo("tipoderesolucion:create"), tipoderesolucionController.crear);
router.put("/:id", authRequired, allowTo("tipoderesolucion:update"), tipoderesolucionController.actualizar);
router.delete("/:id", authRequired, allowTo("tipoderesolucion:delete"), tipoderesolucionController.eliminar);

export default router;