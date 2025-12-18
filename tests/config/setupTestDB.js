import mysql from "mysql2/promise";
import dotenv from "dotenv";

// CARGA DEL ENV TEST
dotenv.config({ path: "./env/.env.test" });

export default async function initializeTestDB() {
  console.log("🔧 [TEST-DB] Inicializando base de prueba…");

  const DB_SOURCE = process.env.DB_NAME_SOURCE || "personalv5";
  const DB_TEST   = process.env.DB_NAME || "personalv5_test";

  console.log("🔍 SOURCE:", DB_SOURCE);
  console.log("🔍 TEST:", DB_TEST);

  const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
  });


  await conn.query(`DROP DATABASE IF EXISTS \`${DB_TEST}\`;`);
  await conn.query(`CREATE DATABASE \`${DB_TEST}\`;`);

  // Traer las tablas del origen
  const [rows] = await conn.query(
    `SELECT table_name 
       FROM information_schema.tables 
      WHERE table_schema = ?;`,
    [DB_SOURCE]
  );

  console.log("📌 Tablas encontradas:", rows.length);

  for (const t of rows) {
    console.log("➡ copiando tabla:", t.table_name);

    await conn.query(
      `CREATE TABLE \`${DB_TEST}\`.\`${t.table_name}\` 
       LIKE \`${DB_SOURCE}\`.\`${t.table_name}\`;`
    );
  }

  await conn.end();
}
