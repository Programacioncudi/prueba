/**
 * Archivo: src/modules/usuarios/usuarios.schema.js
 * Responsabilidad:
 *   - Definir las reglas de validación de datos de entrada (body).
 *   - Usar Joi para validar el JSON que llega en /register y /login.
 *   - Proteger la API de datos malformados o incompletos.
 */

import Joi from "joi";

/**
 * Esquema de validación para el registro de usuario.
 * Campos:
 *   - email: obligatorio, formato email.
 *   - password: min 6 caracteres.
 *   - rol: "admin" o "user" (por defecto "user").
 */
export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    rol: Joi.string().valid("admin", "user").default("user")
});

/**
 * Esquema de validación para el login.
 * Campos:
 *   - email: obligatorio, formato email.
 *   - password: obligatorio.
 */
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
