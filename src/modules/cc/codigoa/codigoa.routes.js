
import express from "express";
import { codigoaController } from "./codigoa.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Codigoa
 *   description: Operaciones sobre codigoa
 */

/**
 * @swagger
 * /codigoa:
 *   get:
 *     summary: Listar codigoa
 *     tags: [Codigoa]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de codigoa
 *   post:
 *     summary: Crear registro de codigoa
 *     tags: [Codigoa]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /codigoa/{id}:
 *   get:
 *     summary: Obtener codigoa por ID
 *     tags: [Codigoa]
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
 *     summary: Actualizar codigoa por ID
 *     tags: [Codigoa]
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
 *     summary: Eliminar codigoa por ID
 *     tags: [Codigoa]
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

router.get("/", authRequired, allowTo("codigoa:list"), codigoaController.listar);
router.get("/:id", authRequired, allowTo("codigoa:get"), codigoaController.obtener);
router.post("/", authRequired, allowTo("codigoa:create"), codigoaController.crear);
router.put("/:id", authRequired, allowTo("codigoa:update"), codigoaController.actualizar);
router.delete("/:id", authRequired, allowTo("codigoa:delete"), codigoaController.eliminar);

export default router;