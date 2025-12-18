// Auto-generated model for table `agentes`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Agentes extends Model {}

Agentes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    planta_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ocupacion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regimen_horario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ley_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sector_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jefatura_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fecha_baja: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    estado_empleo: {
      type: DataTypes.ENUM('ACTIVO','INACTIVO','BAJA'),
      allowNull: true,
    },
    salario_mensual: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Agentes",
    tableName: "agentes",
    paranoid: true,
    deletedAt: "deleted_at",
    hooks: {
      beforeCreate: (instance, options) => {
        const userId = options?.userId ?? null;
        if (userId) {
          if ("created_by" in instance) instance.setDataValue("created_by", userId);
          if ("updated_by" in instance) instance.setDataValue("updated_by", userId);
        }
      },
      beforeUpdate: (instance, options) => {
        const userId = options?.userId ?? null;
        if (userId && "updated_by" in instance) instance.setDataValue("updated_by", userId);
      },
      beforeDestroy: (instance, options) => {
        const userId = options?.userId ?? null;
        if (userId && "updated_by" in instance) instance.setDataValue("updated_by", userId);
      },
    },
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Agentes;
