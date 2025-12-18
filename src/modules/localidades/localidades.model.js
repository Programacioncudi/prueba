// Auto-generated model for table `localidades`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Localidades extends Model {}

Localidades.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    provincia_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    municipio_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    localidad_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    municipio_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    provincia_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    localidad_codigo: {
      type: DataTypes.STRING(50),
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
    modelName: "Localidades",
    tableName: "localidades",
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

export default Localidades;
