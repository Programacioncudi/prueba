
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Codigoa = sequelize.define("Codigoa", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "codigoa",
  timestamps: true
});
