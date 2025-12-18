
import express from "express";
import { ocupacionController } from "./ocupacion.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Ocupacion
 *   description: Operaciones sobre ocupacion
 */

/**
 * @swagger
 * /ocupacion:
 *   get:
 *     summary: Listar ocupacion
 *     tags: [Ocupacion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de ocupacion
 *   post:
 *     summary: Crear registro de ocupacion
 *     tags: [Ocupacion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /ocupacion/{id}:
 *   get:
 *     summary: Obtener ocupacion por ID
 *     tags: [Ocupacion]
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
 *     summary: Actualizar ocupacion por ID
 *     tags: [Ocupacion]
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
 *     summary: Eliminar ocupacion por ID
 *     tags: [Ocupacion]
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

router.get("/", authRequired, allowTo("ocupacion:list"), ocupacionController.listar);
router.get("/:id", authRequired, allowTo("ocupacion:get"), ocupacionController.obtener);
router.post("/", authRequired, allowTo("ocupacion:create"), ocupacionController.crear);
router.put("/:id", authRequired, allowTo("ocupacion:update"), ocupacionController.actualizar);
router.delete("/:id", authRequired, allowTo("ocupacion:delete"), ocupacionController.eliminar);

export default router;