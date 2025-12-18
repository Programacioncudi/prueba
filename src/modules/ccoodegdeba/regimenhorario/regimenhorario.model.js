
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Regimenhorario = sequelize.define("Regimenhorario", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "regimenhorario",
  timestamps: true
});
