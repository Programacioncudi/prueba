
import express from "express";
import { citacionesController } from "./citaciones.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Citaciones
 *   description: Operaciones sobre citaciones
 */

/**
 * @swagger
 * /citaciones:
 *   get:
 *     summary: Listar citaciones
 *     tags: [Citaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de citaciones
 *   post:
 *     summary: Crear registro de citaciones
 *     tags: [Citaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /citaciones/{id}:
 *   get:
 *     summary: Obtener citaciones por ID
 *     tags: [Citaciones]
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
 *     summary: Actualizar citaciones por ID
 *     tags: [Citaciones]
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
 *     summary: Eliminar citaciones por ID
 *     tags: [Citaciones]
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

router.get("/", authRequired, allowTo("citaciones:list"), citacionesController.listar);
router.get("/:id", authRequired, allowTo("citaciones:get"), citacionesController.obtener);
router.post("/", authRequired, allowTo("citaciones:create"), citacionesController.crear);
router.put("/:id", authRequired, allowTo("citaciones:update"), citacionesController.actualizar);
router.delete("/:id", authRequired, allowTo("citaciones:delete"), citacionesController.eliminar);

export default router;