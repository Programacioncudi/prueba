
import express from "express";
import { tareasadquiridiasController } from "./tareasadquiridias.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Tareasadquiridias
 *   description: Operaciones sobre tareasadquiridias
 */

/**
 * @swagger
 * /tareasadquiridias:
 *   get:
 *     summary: Listar tareasadquiridias
 *     tags: [Tareasadquiridias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de tareasadquiridias
 *   post:
 *     summary: Crear registro de tareasadquiridias
 *     tags: [Tareasadquiridias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /tareasadquiridias/{id}:
 *   get:
 *     summary: Obtener tareasadquiridias por ID
 *     tags: [Tareasadquiridias]
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
 *     summary: Actualizar tareasadquiridias por ID
 *     tags: [Tareasadquiridias]
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
 *     summary: Eliminar tareasadquiridias por ID
 *     tags: [Tareasadquiridias]
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

router.get("/", authRequired, allowTo("tareasadquiridias:list"), tareasadquiridiasController.listar);
router.get("/:id", authRequired, allowTo("tareasadquiridias:get"), tareasadquiridiasController.obtener);
router.post("/", authRequired, allowTo("tareasadquiridias:create"), tareasadquiridiasController.crear);
router.put("/:id", authRequired, allowTo("tareasadquiridias:update"), tareasadquiridiasController.actualizar);
router.delete("/:id", authRequired, allowTo("tareasadquiridias:delete"), tareasadquiridiasController.eliminar);

export default router;