
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Especialidaddesmedicas = sequelize.define("Especialidaddesmedicas", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "especialidaddesmedicas",
  timestamps: true
});
