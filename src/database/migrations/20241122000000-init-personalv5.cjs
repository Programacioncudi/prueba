"use strict";

const fs = require("fs");
const path = require("path");

function normalizeAndSplitSQL(sql) {
  // 1. eliminar comentarios tipo /*! ... */
  sql = sql.replace(/\/\*![\s\S]*?\*\//g, "");

  // 2. eliminar comentarios --
  sql = sql.replace(/--.*$/gm, "");

  // 3. eliminar DELIMITER
  sql = sql.replace(/DELIMITER\s+;;/gi, "");
  sql = sql.replace(/DELIMITER\s+;/gi, "");

  // 4. dividir por ; y limpiar
  return sql
    .split(";")
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

module.exports = {
  async up(queryInterface) {
    const sqlPath = path.resolve(__dirname, "../sql/personalv5.full.sql");

    if (!fs.existsSync(sqlPath)) {
      throw new Error(`Archivo SQL no encontrado: ${sqlPath}`);
    }

    const rawSQL = fs.readFileSync(sqlPath, "utf8");
    const statements = normalizeAndSplitSQL(rawSQL);

    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");

    for (const stmt of statements) {
      await queryInterface.sequelize.query(stmt);
    }

    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1;");
  },

  async down() {
    console.warn(
      "Rollback manual requerido para personalv5 (estructura compleja)."
    );
  },
};
