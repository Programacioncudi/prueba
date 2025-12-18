
import express from "express";
import { resolucionesController } from "./resoluciones.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Resoluciones
 *   description: Operaciones sobre resoluciones
 */

/**
 * @swagger
 * /resoluciones:
 *   get:
 *     summary: Listar resoluciones
 *     tags: [Resoluciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de resoluciones
 *   post:
 *     summary: Crear registro de resoluciones
 *     tags: [Resoluciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /resoluciones/{id}:
 *   get:
 *     summary: Obtener resoluciones por ID
 *     tags: [Resoluciones]
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
 *     summary: Actualizar resoluciones por ID
 *     tags: [Resoluciones]
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
 *     summary: Eliminar resoluciones por ID
 *     tags: [Resoluciones]
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

router.get("/", authRequired, allowTo("resoluciones:list"), resolucionesController.listar);
router.get("/:id", authRequired, allowTo("resoluciones:get"), resolucionesController.obtener);
router.post("/", authRequired, allowTo("resoluciones:create"), resolucionesController.crear);
router.put("/:id", authRequired, allowTo("resoluciones:update"), resolucionesController.actualizar);
router.delete("/:id", authRequired, allowTo("resoluciones:delete"), resolucionesController.eliminar);

export default router;