// Auto-generated model for table `bonificaciones`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Bonificaciones extends Model {}

Bonificaciones.init(
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
    decreto_numero: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    motivo: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.STRING(250),
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
    modelName: "Bonificaciones",
    tableName: "bonificaciones",
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
    timestamps: false,
  }
);

export default Bonificaciones;
