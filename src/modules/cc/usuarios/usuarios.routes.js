/**
 * Archivo: src/modules/usuarios/usuarios.routes.js
 * Responsabilidad:
 *   - Definir las rutas HTTP específicas del módulo usuarios.
 *   - Conectar cada ruta con su controlador.
 *   - NO contiene lógica de negocio ni acceso a BD.
 */

import express from "express";
import { usuariosController } from "./usuarios.controller.js";

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones sobre usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Listar usuarios
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de usuarios
 *   post:
 *     summary: Crear registro de usuarios
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Registro creado
 *
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener usuarios por ID
 *     tags: [Usuarios]
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
 *     summary: Actualizar usuarios por ID
 *     tags: [Usuarios]
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
 *     summary: Eliminar usuarios por ID
 *     tags: [Usuarios]
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

// Registro de usuario nuevo
router.post("/register", usuariosController.registrar);

// Login de usuario
router.post("/login", usuariosController.login);

export default router;