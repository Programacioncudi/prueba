
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Jefaturas = sequelize.define("Jefaturas", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "jefaturas",
  timestamps: true
});
