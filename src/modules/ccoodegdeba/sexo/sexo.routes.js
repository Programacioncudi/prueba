
import express from "express";
import { sexoController } from "./sexo.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Sexo
 *   description: Operaciones sobre sexo
 */

/**
 * @swagger
 * /sexo:
 *   get:
 *     summary: Listar sexo
 *     tags: [Sexo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de sexo
 *   post:
 *     summary: Crear registro de sexo
 *     tags: [Sexo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /sexo/{id}:
 *   get:
 *     summary: Obtener sexo por ID
 *     tags: [Sexo]
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
 *     summary: Actualizar sexo por ID
 *     tags: [Sexo]
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
 *     summary: Eliminar sexo por ID
 *     tags: [Sexo]
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

router.get("/", authRequired, allowTo("sexo:list"), sexoController.listar);
router.get("/:id", authRequired, allowTo("sexo:get"), sexoController.obtener);
router.post("/", authRequired, allowTo("sexo:create"), sexoController.crear);
router.put("/:id", authRequired, allowTo("sexo:update"), sexoController.actualizar);
router.delete("/:id", authRequired, allowTo("sexo:delete"), sexoController.eliminar);

export default router;