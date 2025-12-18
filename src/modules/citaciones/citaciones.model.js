// Auto-generated model for table `citaciones`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Citaciones extends Model {}

Citaciones.init(
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
    citado_por: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    motivo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    citacion_activa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fecha_citacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cierre_citacion: {
      type: DataTypes.DATE,
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
    modelName: "Citaciones",
    tableName: "citaciones",
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

export default Citaciones;
