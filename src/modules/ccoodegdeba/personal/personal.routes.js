import express from "express";
import { personalController } from "./personal.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";

/**
 * @swagger
 * tags:
 *   name: Personal
 *   description: Operaciones sobre personal
 */

/**
 * @swagger
 * /personal:
 *   get:
 *     summary: Listar personal
 *     tags: [Personal]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de personal
 *   post:
 *     summary: Crear registro de personal
 *     tags: [Personal]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /personal/{id}:
 *   get:
 *     summary: Obtener personal por ID
 *     tags: [Personal]
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
 *     summary: Actualizar personal por ID
 *     tags: [Personal]
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
 *     summary: Eliminar personal por ID
 *     tags: [Personal]
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


/**
 * Rutas HTTP de personal.
 */

const router = express.Router();

router.get(
  "/",
  authRequired,
  allowTo("personal:list"),
  personalController.listar
);

router.get(
  "/:dni",
  authRequired,
  allowTo("personal:get"),
  personalController.obtener
);

router.post(
  "/",
  authRequired,
  allowTo("personal:create"),
  personalController.crear
);

router.put(
  "/:dni",
  authRequired,
  allowTo("personal:update"),
  personalController.actualizar
);

router.delete(
  "/:dni",
  authRequired,
  allowTo("personal:delete"),
  personalController.eliminar
);

export default router;