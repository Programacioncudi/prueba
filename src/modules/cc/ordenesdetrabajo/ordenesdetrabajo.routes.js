
import express from "express";
import { ordenesdetrabajoController } from "./ordenesdetrabajo.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Ordenesdetrabajo
 *   description: Operaciones sobre ordenesdetrabajo
 */

/**
 * @swagger
 * /ordenesdetrabajo:
 *   get:
 *     summary: Listar ordenesdetrabajo
 *     tags: [Ordenesdetrabajo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de ordenesdetrabajo
 *   post:
 *     summary: Crear registro de ordenesdetrabajo
 *     tags: [Ordenesdetrabajo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /ordenesdetrabajo/{id}:
 *   get:
 *     summary: Obtener ordenesdetrabajo por ID
 *     tags: [Ordenesdetrabajo]
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
 *     summary: Actualizar ordenesdetrabajo por ID
 *     tags: [Ordenesdetrabajo]
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
 *     summary: Eliminar ordenesdetrabajo por ID
 *     tags: [Ordenesdetrabajo]
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

router.get("/", authRequired, allowTo("ordenesdetrabajo:list"), ordenesdetrabajoController.listar);
router.get("/:id", authRequired, allowTo("ordenesdetrabajo:get"), ordenesdetrabajoController.obtener);
router.post("/", authRequired, allowTo("ordenesdetrabajo:create"), ordenesdetrabajoController.crear);
router.put("/:id", authRequired, allowTo("ordenesdetrabajo:update"), ordenesdetrabajoController.actualizar);
router.delete("/:id", authRequired, allowTo("ordenesdetrabajo:delete"), ordenesdetrabajoController.eliminar);

export default router;