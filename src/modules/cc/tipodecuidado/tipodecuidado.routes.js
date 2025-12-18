
import express from "express";
import { tipodecuidadoController } from "./tipodecuidado.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Tipodecuidado
 *   description: Operaciones sobre tipodecuidado
 */

/**
 * @swagger
 * /tipodecuidado:
 *   get:
 *     summary: Listar tipodecuidado
 *     tags: [Tipodecuidado]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de tipodecuidado
 *   post:
 *     summary: Crear registro de tipodecuidado
 *     tags: [Tipodecuidado]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /tipodecuidado/{id}:
 *   get:
 *     summary: Obtener tipodecuidado por ID
 *     tags: [Tipodecuidado]
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
 *     summary: Actualizar tipodecuidado por ID
 *     tags: [Tipodecuidado]
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
 *     summary: Eliminar tipodecuidado por ID
 *     tags: [Tipodecuidado]
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

router.get("/", authRequired, allowTo("tipodecuidado:list"), tipodecuidadoController.listar);
router.get("/:id", authRequired, allowTo("tipodecuidado:get"), tipodecuidadoController.obtener);
router.post("/", authRequired, allowTo("tipodecuidado:create"), tipodecuidadoController.crear);
router.put("/:id", authRequired, allowTo("tipodecuidado:update"), tipodecuidadoController.actualizar);
router.delete("/:id", authRequired, allowTo("tipodecuidado:delete"), tipodecuidadoController.eliminar);

export default router;