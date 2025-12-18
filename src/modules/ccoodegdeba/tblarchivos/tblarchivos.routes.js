
import express from "express";
import { tblarchivosController } from "./tblarchivos.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Tblarchivos
 *   description: Operaciones sobre tblarchivos
 */

/**
 * @swagger
 * /tblarchivos:
 *   get:
 *     summary: Listar tblarchivos
 *     tags: [Tblarchivos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de tblarchivos
 *   post:
 *     summary: Crear registro de tblarchivos
 *     tags: [Tblarchivos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /tblarchivos/{id}:
 *   get:
 *     summary: Obtener tblarchivos por ID
 *     tags: [Tblarchivos]
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
 *     summary: Actualizar tblarchivos por ID
 *     tags: [Tblarchivos]
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
 *     summary: Eliminar tblarchivos por ID
 *     tags: [Tblarchivos]
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

router.get("/", authRequired, allowTo("tblarchivos:list"), tblarchivosController.listar);
router.get("/:id", authRequired, allowTo("tblarchivos:get"), tblarchivosController.obtener);
router.post("/", authRequired, allowTo("tblarchivos:create"), tblarchivosController.crear);
router.put("/:id", authRequired, allowTo("tblarchivos:update"), tblarchivosController.actualizar);
router.delete("/:id", authRequired, allowTo("tblarchivos:delete"), tblarchivosController.eliminar);

export default router;