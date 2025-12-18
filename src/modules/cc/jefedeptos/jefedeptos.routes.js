
import express from "express";
import { jefedeptosController } from "./jefedeptos.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Jefedeptos
 *   description: Operaciones sobre jefedeptos
 */

/**
 * @swagger
 * /jefedeptos:
 *   get:
 *     summary: Listar jefedeptos
 *     tags: [Jefedeptos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de jefedeptos
 *   post:
 *     summary: Crear registro de jefedeptos
 *     tags: [Jefedeptos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /jefedeptos/{id}:
 *   get:
 *     summary: Obtener jefedeptos por ID
 *     tags: [Jefedeptos]
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
 *     summary: Actualizar jefedeptos por ID
 *     tags: [Jefedeptos]
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
 *     summary: Eliminar jefedeptos por ID
 *     tags: [Jefedeptos]
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

router.get("/", authRequired, allowTo("jefedeptos:list"), jefedeptosController.listar);
router.get("/:id", authRequired, allowTo("jefedeptos:get"), jefedeptosController.obtener);
router.post("/", authRequired, allowTo("jefedeptos:create"), jefedeptosController.crear);
router.put("/:id", authRequired, allowTo("jefedeptos:update"), jefedeptosController.actualizar);
router.delete("/:id", authRequired, allowTo("jefedeptos:delete"), jefedeptosController.eliminar);

export default router;