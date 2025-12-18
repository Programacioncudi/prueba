
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Cc = sequelize.define("Cc", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "cc",
  timestamps: true
});
