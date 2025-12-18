import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

/**
 * Modelo Sequelize para la tabla "personal"
 */
export const Personal = sequelize.define(
  "Personal",
  {
    dni: { type: DataTypes.STRING(20), primaryKey: true },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY },
    sexo_id: { type: DataTypes.INTEGER },
    telefono: { type: DataTypes.STRING(50) },
    email: { type: DataTypes.STRING(150) },
    domicilio: { type: DataTypes.STRING(200) },
    localidad_id: { type: DataTypes.INTEGER },
    cuil: { type: DataTypes.STRING(20) },
    nacionalidad: { type: DataTypes.STRING(50) },
    observaciones: { type: DataTypes.TEXT }
  },
  {
    tableName: "personal",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
