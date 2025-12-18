
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Planta = sequelize.define("Planta", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "planta",
  timestamps: true
});
