"use strict";

const fs = require("fs");
const path = require("path");

function listModules(projectRoot) {
  const modulesPath = path.join(projectRoot, "src", "modules");
  return fs
    .readdirSync(modulesPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((m) => m !== "auth"); // auth no necesita permisos propios
}

function permCodesForModule(moduleName) {
  const key = moduleName.toUpperCase();
  return [
    `${key}:READ`,
    `${key}:CREATE`,
    `${key}:UPDATE`,
    `${key}:DELETE`,
  ];
}

module.exports = {
  async up(queryInterface) {
    const projectRoot = process.cwd();
    const modules = listModules(projectRoot);

    // Tablas esperadas (ajustá si tus nombres difieren)
    const ROLES_TABLE = "roles";
    const PERMS_TABLE = "permisos";
    const ROLE_PERM_TABLE = "roles_permisos";

    // 1) Roles base
    const roles = [
      { nombre: "ADMIN", descripcion: "Acceso total", activo: 1 },
      { nombre: "USER", descripcion: "Usuario estándar", activo: 1 },
      { nombre: "AUDITOR", descripcion: "Solo lectura", activo: 1 },
    ];

    await queryInterface.bulkInsert(ROLES_TABLE, roles, { ignoreDuplicates: true });

    const [dbRoles] = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM ${ROLES_TABLE} WHERE nombre IN ('ADMIN','USER','AUDITOR')`
    );
    const roleId = Object.fromEntries(dbRoles.map((r) => [r.nombre, r.id]));

    // 2) Permisos por módulo
    const perms = [];
    for (const m of modules) {
      for (const code of permCodesForModule(m)) {
        perms.push({
          codigo: code,
          modulo: m,
          descripcion: `Permiso ${code} sobre módulo ${m}`,
          activo: 1,
        });
      }
    }

    await queryInterface.bulkInsert(PERMS_TABLE, perms, { ignoreDuplicates: true });

    const [dbPerms] = await queryInterface.sequelize.query(
      `SELECT id, codigo FROM ${PERMS_TABLE}`
    );
    const permId = Object.fromEntries(dbPerms.map((p) => [p.codigo, p.id]));

    // 3) Asignaciones por rol
    const rolePerms = [];

    // ADMIN: todo
    for (const m of modules) {
      for (const code of permCodesForModule(m)) {
        rolePerms.push({ rol_id: roleId.ADMIN, permiso_id: permId[code] });
      }
    }

    // AUDITOR: solo READ
    for (const m of modules) {
      const code = `${m.toUpperCase()}:READ`;
      rolePerms.push({ rol_id: roleId.AUDITOR, permiso_id: permId[code] });
    }

    // USER: READ + CREATE + UPDATE
    for (const m of modules) {
      const key = m.toUpperCase();
      for (const code of [`${key}:READ`, `${key}:CREATE`, `${key}:UPDATE`]) {
        rolePerms.push({ rol_id: roleId.USER, permiso_id: permId[code] });
      }
    }

    await queryInterface.bulkInsert(ROLE_PERM_TABLE, rolePerms, {
      ignoreDuplicates: true,
    });
  },

  async down(queryInterface) {
    // En enterprise normalmente NO se borra RBAC base en rollback
  },
};
