
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Resoluciones = sequelize.define("Resoluciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "resoluciones",
  timestamps: true
});
