
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Ordenesdetrabajo = sequelize.define("Ordenesdetrabajo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "ordenesdetrabajo",
  timestamps: true
});
