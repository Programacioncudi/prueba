/**
 * Script ENTERPRISE para generar permisos automáticos
 * a partir de las tablas de la base de datos.
 *
 * Convenciones:
 *   <dominio>_<recurso>
 * Ejemplo:
 *   cc_planta → dominio = cc, recurso = planta
 */

import "../src/config/env.config.js";
import { sequelize } from "../src/config/db.config.js";
import fs from "fs";
import path from "path";
import { logger } from "../src/utils/logger.js";

const OUTPUT_DIR = path.join("src", "security", "permissions");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "permissions.auto.json");

// Acciones por convención (modificable)
const ACCIONES = ["listar", "ver", "crear", "editar", "eliminar", "exportar"];

async function getAllTables() {
  const [rows] = await sequelize.query("SHOW TABLES;");
  const tables = rows.map(Object.values).flat();
  return tables;
}

function parseDomainAndResource(table) {
  if (!table.includes("_")) return null;

  const [dominio, ...rest] = table.split("_");
  const recurso = rest.join("_");

  if (!dominio || !recurso) return null;

  return { dominio, recurso };
}

function generatePermissionsFor(domain, resource) {
  return ACCIONES.map((accion) => `${domain}:${resource}:${accion}`);
}

async function generate() {
  logger.info("🚀 Generando permisos AUTOMÁTICOS por convención…");

  const tables = await getAllTables();
  logger.info(`📦 Tablas detectadas: ${tables.length}`);

  const dominios = {};
  const permisosGlobales = [];

  tables.forEach((table) => {
    const info = parseDomainAndResource(table);
    if (!info) return;

    const { dominio, recurso } = info;

    if (!dominios[dominio]) dominios[dominio] = [];

    const permisosRecurso = generatePermissionsFor(dominio, recurso);

    dominios[dominio].push(...permisosRecurso);
    permisosGlobales.push(...permisosRecurso);
  });

  const output = {
    generado: new Date().toISOString(),
    dominios,
    permisos: Array.from(new Set(permisosGlobales)).sort(),
  };

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

  logger.info("✅ Permisos automáticos generados con éxito", {
    archivo: OUTPUT_FILE,
  });
  process.exit(0);
}

generate().catch((err) => {
  logger.error("❌ Error generando permisos automáticos", err);
  process.exit(1);
});
