
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Ccoodegdeba = sequelize.define("Ccoodegdeba", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  tableName: "ccoodegdeba",
  timestamps: true
});
