
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Nomenclador = sequelize.define("Nomenclador", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "nomenclador",
  timestamps: true
});
