import mysql from "mysql2/promise";

export async function resetTestDB() {
  const DB_MAIN = "personalv5";
  const DB_TEST = "personalv5_test";

  console.log(`[TEST-DB] Reiniciando ${DB_TEST}…`);

  // conexión directa al servidor
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });

  // 1. recrear la base limpia
  await connection.query(`DROP DATABASE IF EXISTS ${DB_TEST}`);
  await connection.query(`CREATE DATABASE ${DB_TEST} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);

  // 2. leer las tablas reales QUE EXISTEN
  const [rows] = await connection.query(`
      SELECT TABLE_NAME 
      FROM information_schema.tables 
      WHERE table_schema = ?
  `, [DB_MAIN]);

  const tables = rows.map(r => r.TABLE_NAME);

  console.log(`[TEST-DB] → ${tables.length} tablas detectadas correctamente.`);

  // 3. clonar una por una
  for (const table of tables) {
    console.log(`→ Clonando tabla: ${table}`);

    await connection.query(`
        CREATE TABLE ${DB_TEST}.${table}
        LIKE ${DB_MAIN}.${table};
    `);

    await connection.query(`
        INSERT INTO ${DB_TEST}.${table}
        SELECT * FROM ${DB_MAIN}.${table};
    `);
  }

  console.log(`[TEST-DB] ✓ Base clonada correctamente.`);
  await connection.end();
}
