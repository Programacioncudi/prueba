// Auto-generated model for table `roles_permisos`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class RolesPermisos extends Model {}

RolesPermisos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permiso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: "RolesPermisos",
    tableName: "roles_permisos",
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

export default RolesPermisos;
