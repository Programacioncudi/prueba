
import express from "express";
import { agentesController } from "./agentes.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Agentes
 *   description: Operaciones sobre agentes
 */

/**
 * @swagger
 * /agentes:
 *   get:
 *     summary: Listar agentes
 *     tags: [Agentes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de agentes
 *   post:
 *     summary: Crear registro de agentes
 *     tags: [Agentes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /agentes/{id}:
 *   get:
 *     summary: Obtener agentes por ID
 *     tags: [Agentes]
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
 *     summary: Actualizar agentes por ID
 *     tags: [Agentes]
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
 *     summary: Eliminar agentes por ID
 *     tags: [Agentes]
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

router.get("/", authRequired, allowTo("agentes:list"), agentesController.listar);
router.get("/:id", authRequired, allowTo("agentes:get"), agentesController.obtener);
router.post("/", authRequired, allowTo("agentes:create"), agentesController.crear);
router.put("/:id", authRequired, allowTo("agentes:update"), agentesController.actualizar);
router.delete("/:id", authRequired, allowTo("agentes:delete"), agentesController.eliminar);

export default router;