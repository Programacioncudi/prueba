
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Reparticiones = sequelize.define("Reparticiones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "reparticiones",
  timestamps: true
});
