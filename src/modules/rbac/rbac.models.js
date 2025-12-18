// src/modules/rbac/rbac.models.js
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.config.js";

// Usuario
export class Usuario extends Model {}
Usuario.init(
  {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    estado: {
      type: DataTypes.ENUM("activo", "inactivo"),
      defaultValue: "activo",
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: "usuarios",
    timestamps: true,
    createdAt: "creado_en",
    updatedAt: "actualizado_en",
  }
);

// Rol
export class Rol extends Model {}
Rol.init(
  {
    nombre: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    descripcion: DataTypes.STRING(255),
  },
  {
    sequelize,
    modelName: "Rol",
    tableName: "roles",
    timestamps: false,
  }
);

// Permiso
export class Permiso extends Model {}
Permiso.init(
  {
    clave: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false, // ej: 'cc:planta:listar'
    },
    descripcion: DataTypes.STRING(255),
  },
  {
    sequelize,
    modelName: "Permiso",
    tableName: "permisos",
    timestamps: false,
  }
);

// Dominio (módulo)
export class Dominio extends Model {}
Dominio.init(
  {
    nombre: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false, // ej: 'cc', 'ccoodegdeba'
    },
    descripcion: DataTypes.STRING(255),
  },
  {
    sequelize,
    modelName: "Dominio",
    tableName: "dominios",
    timestamps: false,
  }
);

// Tablas de relación
export class RolPermiso extends Model {}
RolPermiso.init(
  {},
  {
    sequelize,
    modelName: "RolPermiso",
    tableName: "roles_permisos",
    timestamps: false,
  }
);

export class UsuarioDominio extends Model {}
UsuarioDominio.init(
  {},
  {
    sequelize,
    modelName: "UsuarioDominio",
    tableName: "usuarios_dominios",
    timestamps: false,
  }
);

// ASOCIACIONES
// Usuario tiene 1 Rol (si ya tenés columna rol_id en usuarios)
Usuario.belongsTo(Rol, { foreignKey: "rol_id", as: "rol" });
Rol.hasMany(Usuario, { foreignKey: "rol_id", as: "usuarios" });

// Rol <-> Permisos (Many-to-Many)
Rol.belongsToMany(Permiso, {
  through: RolPermiso,
  foreignKey: "rol_id",
  otherKey: "permiso_id",
  as: "permisos",
});
Permiso.belongsToMany(Rol, {
  through: RolPermiso,
  foreignKey: "permiso_id",
  otherKey: "rol_id",
  as: "roles",
});

// Usuario <-> Dominios (Many-to-Many)
Usuario.belongsToMany(Dominio, {
  through: UsuarioDominio,
  foreignKey: "usuario_id",
  otherKey: "dominio_id",
  as: "dominios",
});
Dominio.belongsToMany(Usuario, {
  through: UsuarioDominio,
  foreignKey: "dominio_id",
  otherKey: "usuario_id",
  as: "usuarios",
});
