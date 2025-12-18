
import express from "express";
import { leyController } from "./ley.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Ley
 *   description: Operaciones sobre ley
 */

/**
 * @swagger
 * /ley:
 *   get:
 *     summary: Listar ley
 *     tags: [Ley]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de ley
 *   post:
 *     summary: Crear registro de ley
 *     tags: [Ley]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /ley/{id}:
 *   get:
 *     summary: Obtener ley por ID
 *     tags: [Ley]
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
 *     summary: Actualizar ley por ID
 *     tags: [Ley]
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
 *     summary: Eliminar ley por ID
 *     tags: [Ley]
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

router.get("/", authRequired, allowTo("ley:list"), leyController.listar);
router.get("/:id", authRequired, allowTo("ley:get"), leyController.obtener);
router.post("/", authRequired, allowTo("ley:create"), leyController.crear);
router.put("/:id", authRequired, allowTo("ley:update"), leyController.actualizar);
router.delete("/:id", authRequired, allowTo("ley:delete"), leyController.eliminar);

export default router;