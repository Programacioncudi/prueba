
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Consultas = sequelize.define("Consultas", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "consultas",
  timestamps: true
});
