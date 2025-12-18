
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Sexo = sequelize.define("Sexo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "sexo",
  timestamps: true
});
