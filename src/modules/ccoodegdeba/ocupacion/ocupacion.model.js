import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Ocupacion = sequelize.define("Ocupacion", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_ocupacion: { type: DataTypes.STRING(50), allowNull: false },
  codigo: { type: DataTypes.INTEGER },
  regimen_horario_id: { type: DataTypes.INTEGER },
  es_insalubre: { type: DataTypes.BOOLEAN },
  especialidad_id: { type: DataTypes.INTEGER },
  ley_id: { type: DataTypes.INTEGER },
  agrupamiento: { type: DataTypes.STRING(255) },
  grado: { type: DataTypes.STRING(255) },
  asignacion: { type: DataTypes.STRING(255) },
  activo: { type: DataTypes.BOOLEAN }
}, {
  tableName: "ocupacion",
  timestamps: false
});
