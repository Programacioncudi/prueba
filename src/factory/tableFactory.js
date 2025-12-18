// src/factory/tableFactory.js
import { sequelize } from "../config/db.config.js";
import { generateValueForColumn } from "./valueGenerators.js";

/**
 * Obtiene el esquema de una tabla desde Sequelize
 */
export async function getTableDefinition(tableName) {
  const qi = sequelize.getQueryInterface();
  const definition = await qi.describeTable(tableName);
  // definition = { columna: { type, allowNull, defaultValue, ... }, ... }
  return definition;
}

/**
 * Genera una fila fake coherente con el esquema de la tabla.
 */
export async function buildRowForTable(tableName) {
  const def = await getTableDefinition(tableName);
  const row = {};

  for (const [columnName, columnDef] of Object.entries(def)) {
    // No tocamos columnas autoincrement
    if (columnDef.autoIncrement) continue;

    // Si tiene default y es nullable, podemos omitir
    if (columnDef.defaultValue !== null && columnDef.allowNull) continue;

    const value = generateValueForColumn(columnName, columnDef);

    if (value === null && !columnDef.allowNull && columnDef.defaultValue == null) {
      // Último fallback: string fijo
      row[columnName] = `FAKE_${columnName}`;
    } else if (value !== null) {
      row[columnName] = value;
    }
  }

  return row;
}

/**
 * Inserta N filas en la tabla usando raw queries.
 */
export async function seedTableWithFakeData(tableName, count = 10) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    // eslint-disable-next-line no-await-in-loop
    const row = await buildRowForTable(tableName);
    rows.push(row);
  }

  const qi = sequelize.getQueryInterface();
  await qi.bulkInsert(tableName, rows);
  return rows.length;
}
