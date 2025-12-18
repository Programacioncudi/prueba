
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Jefedeptos = sequelize.define("Jefedeptos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "jefedeptos",
  timestamps: true
});
