
import express from "express";
import { plantaController } from "./planta.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Planta
 *   description: Operaciones sobre planta
 */

/**
 * @swagger
 * /planta:
 *   get:
 *     summary: Listar planta
 *     tags: [Planta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de planta
 *   post:
 *     summary: Crear registro de planta
 *     tags: [Planta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /planta/{id}:
 *   get:
 *     summary: Obtener planta por ID
 *     tags: [Planta]
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
 *     summary: Actualizar planta por ID
 *     tags: [Planta]
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
 *     summary: Eliminar planta por ID
 *     tags: [Planta]
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

router.get("/", authRequired, allowTo("planta:list"), plantaController.listar);
router.get("/:id", authRequired, allowTo("planta:get"), plantaController.obtener);
router.post("/", authRequired, allowTo("planta:create"), plantaController.crear);
router.put("/:id", authRequired, allowTo("planta:update"), plantaController.actualizar);
router.delete("/:id", authRequired, allowTo("planta:delete"), plantaController.eliminar);

export default router;