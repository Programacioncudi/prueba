import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Bonificaciones = sequelize.define("Bonificaciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dni: { type: DataTypes.STRING(20), allowNull: false },
  decreto_numero: { type: DataTypes.STRING(50) },
  motivo: { type: DataTypes.STRING(150) },
  fecha: { type: DataTypes.DATEONLY },
  anio: { type: DataTypes.INTEGER },
  observaciones: { type: DataTypes.STRING(250) }
}, {
  tableName: "bonificaciones",
  timestamps: false
});
