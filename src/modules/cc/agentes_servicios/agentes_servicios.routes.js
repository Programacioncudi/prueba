
import express from "express";
import { agentes_serviciosController } from "./agentes_servicios.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: AgentesServicios
 *   description: Operaciones sobre agentes_servicios
 */

/**
 * @swagger
 * /agentes_servicios:
 *   get:
 *     summary: Listar agentes_servicios
 *     tags: [AgentesServicios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de agentes_servicios
 *   post:
 *     summary: Crear registro de agentes_servicios
 *     tags: [AgentesServicios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /agentes_servicios/{id}:
 *   get:
 *     summary: Obtener agentes_servicios por ID
 *     tags: [AgentesServicios]
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
 *     summary: Actualizar agentes_servicios por ID
 *     tags: [AgentesServicios]
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
 *     summary: Eliminar agentes_servicios por ID
 *     tags: [AgentesServicios]
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

router.get("/", authRequired, allowTo("agentes_servicios:list"), agentes_serviciosController.listar);
router.get("/:id", authRequired, allowTo("agentes_servicios:get"), agentes_serviciosController.obtener);
router.post("/", authRequired, allowTo("agentes_servicios:create"), agentes_serviciosController.crear);
router.put("/:id", authRequired, allowTo("agentes_servicios:update"), agentes_serviciosController.actualizar);
router.delete("/:id", authRequired, allowTo("agentes_servicios:delete"), agentes_serviciosController.eliminar);

export default router;