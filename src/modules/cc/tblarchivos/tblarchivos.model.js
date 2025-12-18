
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Tblarchivos = sequelize.define("Tblarchivos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "tblarchivos",
  timestamps: true
});
