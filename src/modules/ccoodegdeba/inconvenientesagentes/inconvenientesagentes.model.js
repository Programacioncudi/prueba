
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Inconvenientesagentes = sequelize.define("Inconvenientesagentes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "inconvenientesagentes",
  timestamps: true
});
