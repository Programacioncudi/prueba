"use strict";

/**
 * Archivo: migrations/20250101000000-init-personalv5.js
 * Responsabilidad:
 *   - Crear TODA la estructura inicial de la base (tablas, índices, FKs)
 *     ejecutando el script SQL exportado desde MySQL.
 *   - Dejar la DB en un estado consistente para que los modelos y asociaciones
 *     funcionen correctamente.
 *
 * Notas:
 *   - El archivo SQL debe estar en: ./sql/personalv5_schema.sql
 *   - NO debe contener DROP DATABASE ni CREATE DATABASE, solo tablas/alter.
 */

const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ejecuta el script SQL completo para crear la estructura.
   */
  up: async (queryInterface, Sequelize) => {
    const sqlPath = path.resolve(__dirname, "..", "sql", "personalv5_schema.sql");

    if (!fs.existsSync(sqlPath)) {
      throw new Error(
        `No se encontró el archivo de esquema SQL en: ${sqlPath}. ` +
          `Asegurate de exportar la estructura de la base y guardarla ahí.`
      );
    }

    const sql = fs.readFileSync(sqlPath, "utf8");

    // Ejecutamos el SQL tal cual, incluyendo CREATE TABLE, ALTER, etc.
    // IMPORTANTE: el script NO debe tener COMMIT/ROLLBACK ni USE otra base.
    await queryInterface.sequelize.query(sql);
  },

  /**
   * El rollback elimina todas las tablas del esquema.
   * IMPORTANTE: debe estar en orden que no rompa las FKs.
   */
  down: async (queryInterface, Sequelize) => {
    const tables = [
      "categoria",
      "codigoa",
      "disiplina",
      "especialidaddesmedicas",
      "jefaturas",
      "jefedeptos",
      "ley",
      "ministerios",
      "nomenclador",
      "planta",
      "reparticiones",
      "sexo",
      "tipodecuidado",
      "tipoderesolucion",
      "regimenhorario",
      "localidades",
      "ocupacion",
      "personal",
      "agentes",
      "agentes_servicios",
      "bonificaciones",
      "citaciones",
      "consultas",
      "inconvenientesagentes",
      "ordenesdetrabajo",
      "pedidos",
      "resoluciones",
      "tblarchivos",
      "cc",
      "expedientes",
      "tareas",
      "tareasadquiridias",
      "funciones",
      "ccoodegdeba",
      "usuarios"
    ];

    // Drop en orden inverso por si hay FKs
    for (const name of tables.reverse()) {
      await queryInterface.dropTable(name, { cascade: true }).catch(() => {});
    }
  }
};
