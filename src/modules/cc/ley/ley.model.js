
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Ley = sequelize.define("Ley", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "ley",
  timestamps: true
});
