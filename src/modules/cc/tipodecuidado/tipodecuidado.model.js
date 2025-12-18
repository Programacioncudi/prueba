
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Tipodecuidado = sequelize.define("Tipodecuidado", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "tipodecuidado",
  timestamps: true
});
