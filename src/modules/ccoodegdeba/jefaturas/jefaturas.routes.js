
import express from "express";
import { jefaturasController } from "./jefaturas.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Jefaturas
 *   description: Operaciones sobre jefaturas
 */

/**
 * @swagger
 * /jefaturas:
 *   get:
 *     summary: Listar jefaturas
 *     tags: [Jefaturas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de jefaturas
 *   post:
 *     summary: Crear registro de jefaturas
 *     tags: [Jefaturas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /jefaturas/{id}:
 *   get:
 *     summary: Obtener jefaturas por ID
 *     tags: [Jefaturas]
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
 *     summary: Actualizar jefaturas por ID
 *     tags: [Jefaturas]
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
 *     summary: Eliminar jefaturas por ID
 *     tags: [Jefaturas]
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

router.get("/", authRequired, allowTo("jefaturas:list"), jefaturasController.listar);
router.get("/:id", authRequired, allowTo("jefaturas:get"), jefaturasController.obtener);
router.post("/", authRequired, allowTo("jefaturas:create"), jefaturasController.crear);
router.put("/:id", authRequired, allowTo("jefaturas:update"), jefaturasController.actualizar);
router.delete("/:id", authRequired, allowTo("jefaturas:delete"), jefaturasController.eliminar);

export default router;