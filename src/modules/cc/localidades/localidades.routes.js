
import express from "express";
import { localidadesController } from "./localidades.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Localidades
 *   description: Operaciones sobre localidades
 */

/**
 * @swagger
 * /localidades:
 *   get:
 *     summary: Listar localidades
 *     tags: [Localidades]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de localidades
 *   post:
 *     summary: Crear registro de localidades
 *     tags: [Localidades]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /localidades/{id}:
 *   get:
 *     summary: Obtener localidades por ID
 *     tags: [Localidades]
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
 *     summary: Actualizar localidades por ID
 *     tags: [Localidades]
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
 *     summary: Eliminar localidades por ID
 *     tags: [Localidades]
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

router.get("/", authRequired, allowTo("localidades:list"), localidadesController.listar);
router.get("/:id", authRequired, allowTo("localidades:get"), localidadesController.obtener);
router.post("/", authRequired, allowTo("localidades:create"), localidadesController.crear);
router.put("/:id", authRequired, allowTo("localidades:update"), localidadesController.actualizar);
router.delete("/:id", authRequired, allowTo("localidades:delete"), localidadesController.eliminar);

export default router;