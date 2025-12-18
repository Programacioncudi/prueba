/**
 * Archivo: src/modules/usuarios/usuarios.repository.js
 * Responsabilidad:
 *   - Acceder directamente a la base de datos usando el modelo Usuario.
 *   - Encapsular consultas CRUD relacionadas al modelo usuarios.
 *   - NO contiene lógica de negocio, solo lectura/escritura en BD.
 */

import { Usuario } from "./usuarios.model.js";

export const usuariosRepository = {
    /**
     * Busca un usuario por su email.
     * Se usa en registro y login.
     */
    findByEmail: (email) => Usuario.findOne({ where: { email } }),

    /**
     * Busca un usuario por su ID (clave primaria).
     */
    findById: (id) => Usuario.findByPk(id),

    /**
     * Crea un nuevo registro de usuario en la tabla "usuarios".
     */
    create: (data) => Usuario.create(data),
};
