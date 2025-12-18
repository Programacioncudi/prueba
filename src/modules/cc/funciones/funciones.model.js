
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Funciones = sequelize.define("Funciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "funciones",
  timestamps: true
});
