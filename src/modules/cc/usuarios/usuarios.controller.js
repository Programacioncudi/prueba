/**
 * Archivo: src/modules/usuarios/usuarios.controller.js
 * Responsabilidad:
 *   - Recibir las requests HTTP (req/res).
 *   - Invocar al service correspondiente.
 *   - Manejar validación, errores y formato de respuesta JSON.
 */

import { usuariosService } from "./usuarios.service.js";
import { registerSchema, loginSchema } from "./usuarios.schema.js";

export const usuariosController = {
    /**
     * Endpoint POST /api/usuarios/register
     * Registra un usuario nuevo.
     */
    registrar: async (req, res, next) => {
        try {
            // Validación del body con Joi
            const { error, value } = registerSchema.validate(req.body);
            if (error) throw new Error(error.details[0].message);

            const usuario = await usuariosService.registrar(value);
            res.json({ ok: true, usuario });
        } catch (err) {
            next(err); // Delega a error.middleware.js
        }
    },

    /**
     * Endpoint POST /api/usuarios/login
     * Inicia sesión y devuelve un token + datos del usuario.
     */
    login: async (req, res, next) => {
        try {
            // Validación del body con Joi
            const { error, value } = loginSchema.validate(req.body);
            if (error) throw new Error(error.details[0].message);

            const data = await usuariosService.login(value.email, value.password);
            res.json({ ok: true, ...data });
        } catch (err) {
            next(err);
        }
    }
};
