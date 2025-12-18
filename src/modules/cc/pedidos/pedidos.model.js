
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Pedidos = sequelize.define("Pedidos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "pedidos",
  timestamps: true
});
