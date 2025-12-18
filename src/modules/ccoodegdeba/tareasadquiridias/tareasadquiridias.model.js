
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Tareasadquiridias = sequelize.define("Tareasadquiridias", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "tareasadquiridias",
  timestamps: true
});
