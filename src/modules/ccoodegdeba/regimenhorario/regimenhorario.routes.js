
import express from "express";
import { regimenhorarioController } from "./regimenhorario.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Regimenhorario
 *   description: Operaciones sobre regimenhorario
 */

/**
 * @swagger
 * /regimenhorario:
 *   get:
 *     summary: Listar regimenhorario
 *     tags: [Regimenhorario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de regimenhorario
 *   post:
 *     summary: Crear registro de regimenhorario
 *     tags: [Regimenhorario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /regimenhorario/{id}:
 *   get:
 *     summary: Obtener regimenhorario por ID
 *     tags: [Regimenhorario]
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
 *     summary: Actualizar regimenhorario por ID
 *     tags: [Regimenhorario]
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
 *     summary: Eliminar regimenhorario por ID
 *     tags: [Regimenhorario]
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

router.get("/", authRequired, allowTo("regimenhorario:list"), regimenhorarioController.listar);
router.get("/:id", authRequired, allowTo("regimenhorario:get"), regimenhorarioController.obtener);
router.post("/", authRequired, allowTo("regimenhorario:create"), regimenhorarioController.crear);
router.put("/:id", authRequired, allowTo("regimenhorario:update"), regimenhorarioController.actualizar);
router.delete("/:id", authRequired, allowTo("regimenhorario:delete"), regimenhorarioController.eliminar);

export default router;