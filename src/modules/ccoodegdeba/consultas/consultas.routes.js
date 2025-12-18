
import express from "express";
import { consultasController } from "./consultas.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Operaciones sobre consultas
 */

/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Listar consultas
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de consultas
 *   post:
 *     summary: Crear registro de consultas
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /consultas/{id}:
 *   get:
 *     summary: Obtener consultas por ID
 *     tags: [Consultas]
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
 *     summary: Actualizar consultas por ID
 *     tags: [Consultas]
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
 *     summary: Eliminar consultas por ID
 *     tags: [Consultas]
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

router.get("/", authRequired, allowTo("consultas:list"), consultasController.listar);
router.get("/:id", authRequired, allowTo("consultas:get"), consultasController.obtener);
router.post("/", authRequired, allowTo("consultas:create"), consultasController.crear);
router.put("/:id", authRequired, allowTo("consultas:update"), consultasController.actualizar);
router.delete("/:id", authRequired, allowTo("consultas:delete"), consultasController.eliminar);

export default router;