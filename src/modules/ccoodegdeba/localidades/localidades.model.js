
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Localidades = sequelize.define("Localidades", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "localidades",
  timestamps: true
});
