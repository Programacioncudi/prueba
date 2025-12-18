
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Agentes_servicios = sequelize.define("Agentes_servicios", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "agentes_servicios",
  timestamps: true
});
