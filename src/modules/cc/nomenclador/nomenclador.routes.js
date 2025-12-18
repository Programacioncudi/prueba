
import express from "express";
import { nomencladorController } from "./nomenclador.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Nomenclador
 *   description: Operaciones sobre nomenclador
 */

/**
 * @swagger
 * /nomenclador:
 *   get:
 *     summary: Listar nomenclador
 *     tags: [Nomenclador]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de nomenclador
 *   post:
 *     summary: Crear registro de nomenclador
 *     tags: [Nomenclador]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /nomenclador/{id}:
 *   get:
 *     summary: Obtener nomenclador por ID
 *     tags: [Nomenclador]
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
 *     summary: Actualizar nomenclador por ID
 *     tags: [Nomenclador]
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
 *     summary: Eliminar nomenclador por ID
 *     tags: [Nomenclador]
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

router.get("/", authRequired, allowTo("nomenclador:list"), nomencladorController.listar);
router.get("/:id", authRequired, allowTo("nomenclador:get"), nomencladorController.obtener);
router.post("/", authRequired, allowTo("nomenclador:create"), nomencladorController.crear);
router.put("/:id", authRequired, allowTo("nomenclador:update"), nomencladorController.actualizar);
router.delete("/:id", authRequired, allowTo("nomenclador:delete"), nomencladorController.eliminar);

export default router;