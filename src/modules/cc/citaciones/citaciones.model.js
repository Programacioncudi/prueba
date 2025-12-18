
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Citaciones = sequelize.define("Citaciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "citaciones",
  timestamps: true
});
