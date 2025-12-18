// Auto-generated model for table `agentes_servicios`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class AgentesServicios extends Model {}

AgentesServicios.init(
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
    dependencia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    servicio_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    jefe_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    motivo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.STRING(255),
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
    modelName: "AgentesServicios",
    tableName: "agentes_servicios",
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

export default AgentesServicios;
