// Auto-generated model for table `permisos`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Permisos extends Model {}

Permisos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    clave: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    dominio_id: {
      type: DataTypes.INTEGER,
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
    modelName: "Permisos",
    tableName: "permisos",
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

export default Permisos;
