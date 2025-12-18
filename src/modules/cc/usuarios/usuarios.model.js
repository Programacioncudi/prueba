/**
 * Archivo: src/modules/usuarios/usuarios.model.js
 * Responsabilidad:
 *   - Definir la estructura de la tabla "usuarios" en la base de datos.
 *   - Indicar tipos de datos, claves, restricciones y nombre de tabla.
 *   - Este modelo es usado por el repositorio para acceder a la BD.
 */

import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

/**
 * Modelo de usuario.
 * Representa un registro en la tabla "usuarios".
 */
export const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(120),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        rol: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: "user"
        }
    },
    {
        tableName: "usuarios", // nombre exacto de la tabla en MySQL
        timestamps: false      // no usamos createdAt/updatedAt automáticos
    }
);
