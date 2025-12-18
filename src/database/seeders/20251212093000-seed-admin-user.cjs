"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    const USER_TABLE = "usuarios";
    const USER_ROLE_TABLE = "usuarios_roles";
    const ROLE_TABLE = "roles";

    // 1) Ver si admin existe
    const [admins] = await queryInterface.sequelize.query(
      `SELECT id FROM ${USER_TABLE} WHERE usuario = 'admin' LIMIT 1`
    );

    if (admins.length) return;

    // 2) Crear admin
    const passwordHash = await bcrypt.hash("Admin123!", 12);

    const [result] = await queryInterface.bulkInsert(
      USER_TABLE,
      [
        {
          usuario: "admin",
          nombre: "Administrador",
          email: "admin@local",
          password: passwordHash,
          activo: 1,
        },
      ],
      { returning: true }
    );

    const adminId = result.insertId || result;

    // 3) Buscar rol ADMIN
    const [[adminRole]] = await queryInterface.sequelize.query(
      `SELECT id FROM ${ROLE_TABLE} WHERE nombre = 'ADMIN' LIMIT 1`
    );

    if (!adminRole) {
      throw new Error("Rol ADMIN no existe. Ejecutá seed RBAC primero.");
    }

    // 4) Asignar rol
    await queryInterface.bulkInsert(USER_ROLE_TABLE, [
      {
        usuario_id: adminId,
        rol_id: adminRole.id,
      },
    ]);
  },

  async down() {},
};
