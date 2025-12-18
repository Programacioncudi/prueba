
import express from "express";
import { inconvenientesagentesController } from "./inconvenientesagentes.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Inconvenientesagentes
 *   description: Operaciones sobre inconvenientesagentes
 */

/**
 * @swagger
 * /inconvenientesagentes:
 *   get:
 *     summary: Listar inconvenientesagentes
 *     tags: [Inconvenientesagentes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de inconvenientesagentes
 *   post:
 *     summary: Crear registro de inconvenientesagentes
 *     tags: [Inconvenientesagentes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /inconvenientesagentes/{id}:
 *   get:
 *     summary: Obtener inconvenientesagentes por ID
 *     tags: [Inconvenientesagentes]
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
 *     summary: Actualizar inconvenientesagentes por ID
 *     tags: [Inconvenientesagentes]
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
 *     summary: Eliminar inconvenientesagentes por ID
 *     tags: [Inconvenientesagentes]
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

router.get("/", authRequired, allowTo("inconvenientesagentes:list"), inconvenientesagentesController.listar);
router.get("/:id", authRequired, allowTo("inconvenientesagentes:get"), inconvenientesagentesController.obtener);
router.post("/", authRequired, allowTo("inconvenientesagentes:create"), inconvenientesagentesController.crear);
router.put("/:id", authRequired, allowTo("inconvenientesagentes:update"), inconvenientesagentesController.actualizar);
router.delete("/:id", authRequired, allowTo("inconvenientesagentes:delete"), inconvenientesagentesController.eliminar);

export default router;