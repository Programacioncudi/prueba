
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Tipoderesolucion = sequelize.define("Tipoderesolucion", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "tipoderesolucion",
  timestamps: true
});
