
import express from "express";
import { categoriaController } from "./categoria.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Categoria
 *   description: Operaciones sobre categoria
 */

/**
 * @swagger
 * /categoria:
 *   get:
 *     summary: Listar categoria
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de categoria
 *   post:
 *     summary: Crear registro de categoria
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /categoria/{id}:
 *   get:
 *     summary: Obtener categoria por ID
 *     tags: [Categoria]
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
 *     summary: Actualizar categoria por ID
 *     tags: [Categoria]
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
 *     summary: Eliminar categoria por ID
 *     tags: [Categoria]
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

router.get("/", authRequired, allowTo("categoria:list"), categoriaController.listar);
router.get("/:id", authRequired, allowTo("categoria:get"), categoriaController.obtener);
router.post("/", authRequired, allowTo("categoria:create"), categoriaController.crear);
router.put("/:id", authRequired, allowTo("categoria:update"), categoriaController.actualizar);
router.delete("/:id", authRequired, allowTo("categoria:delete"), categoriaController.eliminar);

export default router;