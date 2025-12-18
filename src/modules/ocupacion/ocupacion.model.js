// Auto-generated model for table `ocupacion`
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export class Ocupacion extends Model {}

Ocupacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre_ocupacion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regimen_horario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    es_insalubre: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    especialidad_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ley_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    agrupamiento: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    grado: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    asignacion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
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
    modelName: "Ocupacion",
    tableName: "ocupacion",
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

export default Ocupacion;
