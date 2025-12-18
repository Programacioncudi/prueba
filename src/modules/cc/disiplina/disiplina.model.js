
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Disiplina = sequelize.define("Disiplina", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "disiplina",
  timestamps: true
});
