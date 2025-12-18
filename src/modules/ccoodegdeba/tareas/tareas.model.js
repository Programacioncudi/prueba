
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Tareas = sequelize.define("Tareas", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "tareas",
  timestamps: true
});
