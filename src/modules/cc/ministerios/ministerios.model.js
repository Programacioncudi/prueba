
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Ministerios = sequelize.define("Ministerios", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "ministerios",
  timestamps: true
});
