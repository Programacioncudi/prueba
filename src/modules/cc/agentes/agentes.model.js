import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const Agentes = sequelize.define("Agentes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dni: { type: DataTypes.STRING(20), allowNull: false },
  planta_id: { type: DataTypes.INTEGER },
  categoria_id: { type: DataTypes.INTEGER },
  ocupacion_id: { type: DataTypes.INTEGER },
  regimen_horario_id: { type: DataTypes.INTEGER },
  ley_id: { type: DataTypes.INTEGER },
  sector_id: { type: DataTypes.INTEGER },
  jefatura_id: { type: DataTypes.INTEGER },
  fecha_ingreso: { type: DataTypes.DATEONLY },
  fecha_baja: { type: DataTypes.DATEONLY },
  estado_empleo: {
    type: DataTypes.ENUM("ACTIVO", "INACTIVO", "BAJA"),
    defaultValue: "ACTIVO"
  },
  salario_mensual: { type: DataTypes.DECIMAL(12,2) },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE }
}, {
  tableName: "agentes",
  timestamps: false
});
