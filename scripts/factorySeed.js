/**
 * Script: scripts/factorySeed.js
 * Uso:
 *   node scripts/factorySeed.js --table=cc_planta --rows=50
 *   node scripts/factorySeed.js --table=ccoodegdeba_asistencias
 */

import "../src/config/env.config.js";
import { sequelize } from "../src/config/db.config.js";
import { logger } from "../src/utils/logger.js";
import { seedTableWithFakeData } from "../src/factory/tableFactory.js";

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (const arg of args) {
    const [key, value] = arg.split("=");
    if (key.startsWith("--")) {
      params[key.replace(/^--/, "")] = value ?? true;
    }
  }
  return params;
}

async function run() {
  const { table, rows } = parseArgs();

  if (!table) {
    console.error(
      "❌ Tenés que indicar una tabla. Ej: node scripts/factorySeed.js --table=cc_planta --rows=20"
    );
    process.exit(1);
  }

  const count = rows ? Number(rows) : 10;

  try {
    await sequelize.authenticate();
    logger.info("🟢 Conexión a MySQL OK (factory)");

    const inserted = await seedTableWithFakeData(table, count);
    logger.info(`✅ Insertadas ${inserted} filas fake en la tabla ${table}`);

    process.exit(0);
  } catch (err) {
    logger.error("❌ Error ejecutando factorySeed", {
      message: err.message,
      stack: err.stack,
    });
    process.exit(1);
  }
}

run();
