
import express from "express";
import { especialidaddesmedicasController } from "./especialidaddesmedicas.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Especialidaddesmedicas
 *   description: Operaciones sobre especialidaddesmedicas
 */

/**
 * @swagger
 * /especialidaddesmedicas:
 *   get:
 *     summary: Listar especialidaddesmedicas
 *     tags: [Especialidaddesmedicas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de especialidaddesmedicas
 *   post:
 *     summary: Crear registro de especialidaddesmedicas
 *     tags: [Especialidaddesmedicas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /especialidaddesmedicas/{id}:
 *   get:
 *     summary: Obtener especialidaddesmedicas por ID
 *     tags: [Especialidaddesmedicas]
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
 *     summary: Actualizar especialidaddesmedicas por ID
 *     tags: [Especialidaddesmedicas]
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
 *     summary: Eliminar especialidaddesmedicas por ID
 *     tags: [Especialidaddesmedicas]
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

router.get("/", authRequired, allowTo("especialidaddesmedicas:list"), especialidaddesmedicasController.listar);
router.get("/:id", authRequired, allowTo("especialidaddesmedicas:get"), especialidaddesmedicasController.obtener);
router.post("/", authRequired, allowTo("especialidaddesmedicas:create"), especialidaddesmedicasController.crear);
router.put("/:id", authRequired, allowTo("especialidaddesmedicas:update"), especialidaddesmedicasController.actualizar);
router.delete("/:id", authRequired, allowTo("especialidaddesmedicas:delete"), especialidaddesmedicasController.eliminar);

export default router;