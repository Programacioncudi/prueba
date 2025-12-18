"use strict";

/**
 * Migración enterprise:
 *   - Agrega columnas cross-cutting a TODAS las tablas (si no existen):
 *       - deleted_at  (soft delete)
 *       - created_by  (auditoría)
 *       - updated_by  (auditoría)
 *
 * Nota:
 *   - Se usa INFORMATION_SCHEMA para evitar fallos si ya existen.
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    const [tables] = await queryInterface.sequelize.query("SHOW TABLES;");
    const tableNames = tables.map((r) => Object.values(r)[0]);

    const skip = new Set(["SequelizeMeta"]);

    for (const table of tableNames) {
      if (skip.has(table)) continue;

      const [cols] = await queryInterface.sequelize.query(
        "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?",
        { replacements: [table] }
      );
      const existing = new Set(cols.map((c) => c.COLUMN_NAME));

      if (!existing.has("deleted_at")) {
        await queryInterface.addColumn(table, "deleted_at", { type: Sequelize.DATE, allowNull: true });
      }
      if (!existing.has("created_by")) {
        await queryInterface.addColumn(table, "created_by", { type: Sequelize.INTEGER, allowNull: true });
      }
      if (!existing.has("updated_by")) {
        await queryInterface.addColumn(table, "updated_by", { type: Sequelize.INTEGER, allowNull: true });
      }
    }
  },

  async down(queryInterface) {
    const [tables] = await queryInterface.sequelize.query("SHOW TABLES;");
    const tableNames = tables.map((r) => Object.values(r)[0]);

    const skip = new Set(["SequelizeMeta"]);

    for (const table of tableNames) {
      if (skip.has(table)) continue;

      // down defensivo
      try { await queryInterface.removeColumn(table, "deleted_at"); } catch {}
      try { await queryInterface.removeColumn(table, "created_by"); } catch {}
      try { await queryInterface.removeColumn(table, "updated_by"); } catch {}
    }
  },
};
