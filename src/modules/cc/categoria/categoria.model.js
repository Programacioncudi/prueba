
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Categoria = sequelize.define("Categoria", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "categoria",
  timestamps: true
});
