// Auto-generated model for table `reparticiones`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Reparticiones extends Model {}

Reparticiones.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    reparticion_nombre: {
      type: DataTypes.STRING(50),
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
    modelName: "Reparticiones",
    tableName: "reparticiones",
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

export default Reparticiones;
