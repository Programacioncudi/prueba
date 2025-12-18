import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Expedientes = sequelize.define("Expedientes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dni: { type: DataTypes.STRING(20), allowNull: false },
  numero: { type: DataTypes.STRING(255) },
  caratula: { type: DataTypes.STRING(255) },
  fecha: { type: DataTypes.DATEONLY },
  estado: { type: DataTypes.STRING(255) },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE }
}, {
  tableName: "expedientes",
  timestamps: false
});
