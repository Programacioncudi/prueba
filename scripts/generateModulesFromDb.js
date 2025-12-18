/**
 * Archivo: src/scripts/generateModulesFromDb.js
 * Responsabilidad:
 *   - Leer la estructura de la base MySQL real.
 *   - Crear módulos nuevos SIN sobrescribir módulos existentes.
 *   - Regenerar archivos solo si el usuario lo pide por flags.
 *   - Generar model, schema, repository, service, controller, routes.
 *   - Mantener integridad enterprise (limiter, auth, allowTo).
 *
 * Uso:
 *   node src/scripts/generateModulesFromDb.js
 *
 * Flags:
 *   --force-model
 *   --force-schema
 *   --force-service
 *   --force-repository
 *   --force-controller
 *   --force-routes
 *   --force-all
 */

import { config as loadEnv } from "dotenv";
import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// =============================
//  CARGA ENV
// =============================
loadEnv({
  path:
    process.env.NODE_ENV === "production"
      ? "./env/.env.production"
      : "./env/.env.development",
});

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

const REQUIRED = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASSWORD", "DB_NAME"];
for (const k of REQUIRED) {
  if (!process.env[k]) {
    console.error(`❌ Falta variable de entorno: ${k}`);
    process.exit(1);
  }
}

// =============================
//  FLAGS
// =============================
const FORCE = {
  model: process.argv.includes("--force-model"),
  schema: process.argv.includes("--force-schema"),
  repository: process.argv.includes("--force-repository"),
  service: process.argv.includes("--force-service"),
  controller: process.argv.includes("--force-controller"),
  routes: process.argv.includes("--force-routes"),
  all: process.argv.includes("--force-all"),
};

// =============================
//  PATHS
// =============================

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const srcDir = path.resolve(__dirname, "..");
const modulesBasePath = path.join(srcDir, "modules");

// =============================
//  HELPERS
// =============================

function pascal(str) {
  return str
    .split(/[_\s]+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function camel(str) {
  const p = pascal(str);
  return p[0].toLowerCase() + p.slice(1);
}

function mysqlTypeToSequelize(type) {
  type = type.toLowerCase();

  if (type.startsWith("int")) return "DataTypes.INTEGER";
  if (type.startsWith("bigint")) return "DataTypes.BIGINT";
  if (type.startsWith("tinyint(1)")) return "DataTypes.BOOLEAN";
  if (type.startsWith("tinyint")) return "DataTypes.TINYINT";
  if (type.startsWith("smallint")) return "DataTypes.SMALLINT";
  if (type.startsWith("float")) return "DataTypes.FLOAT";
  if (type.startsWith("double")) return "DataTypes.DOUBLE";
  if (type.startsWith("decimal")) return "DataTypes.DECIMAL";

  if (type.startsWith("varchar") || type.startsWith("char"))
    return "DataTypes.STRING";

  if (type.includes("text")) return "DataTypes.TEXT";

  if (type.startsWith("date") && !type.startsWith("datetime"))
    return "DataTypes.DATEONLY";

  if (type.startsWith("datetime") || type.startsWith("timestamp"))
    return "DataTypes.DATE";

  return "DataTypes.STRING";
}

function mysqlTypeToJoi(type) {
  type = type.toLowerCase();

  if (type.startsWith("int") || type.startsWith("bigint")) return "Joi.number()";
  if (type.startsWith("tinyint(1)")) return "Joi.boolean()";
  if (type.startsWith("tinyint") || type.startsWith("smallint")) return "Joi.number()";
  if (type.startsWith("decimal") || type.startsWith("float") || type.startsWith("double"))
    return "Joi.number()";

  if (type.startsWith("date") || type.startsWith("datetime") || type.startsWith("timestamp"))
    return "Joi.date()";

  if (type.startsWith("varchar") || type.startsWith("char") || type.includes("text"))
    return "Joi.string()";

  return "Joi.any()";
}

// =============================
//  GENERACIÓN INTELIGENTE
// =============================

function safeWrite(filePath, content, forceFlag) {
  const exists = fs.existsSync(filePath);

  if (!exists) {
    fs.writeFileSync(filePath, content);
    console.log(`  🆕 Creado: ${path.basename(filePath)}`);
    return;
  }

  if (FORCE.all || forceFlag) {
    fs.writeFileSync(filePath, content);
    console.log(`  🔄 Actualizado (force): ${path.basename(filePath)}`);
    return;
  }

  console.log(`  ⏩ Saltado (ya existe): ${path.basename(filePath)}`);
}

async function generateModule(connection, table) {
  console.log(`\n📦 Procesando tabla: ${table}`);

  const ModuleName = pascal(table);
  const moduleVar = camel(table);

  const moduleDir = path.join(modulesBasePath, table);
  fs.mkdirSync(moduleDir, { recursive: true });

  const [columns] = await connection.query(`SHOW FULL COLUMNS FROM \`${table}\``);

  // ==============================
  // MODEL
  // ==============================
  const modelFile = path.join(moduleDir, `${table}.model.js`);
  const modelAttrs = columns
    .map((c) => {
      const dt = mysqlTypeToSequelize(c.Type);
      const pk = c.Key === "PRI" ? "primaryKey: true," : "";
      const nn = c.Null === "NO" ? "allowNull: false," : "";
      const ai =
        c.Extra && c.Extra.toLowerCase().includes("auto_increment")
          ? "autoIncrement: true,"
          : "";

      return `    ${c.Field}: {
      type: ${dt},
      ${pk}
      ${nn}
      ${ai}
    },`;
    })
    .join("\n");

  const modelContent = `import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";

export const ${ModuleName} = sequelize.define("${ModuleName}", {
${modelAttrs}
  }, {
    tableName: "${table}",
    timestamps: false
});
`;
  safeWrite(modelFile, modelContent, FORCE.model);

  // ==============================
  // SCHEMA
  // ==============================
  const schemaFile = path.join(moduleDir, `${table}.schema.js`);
  const createFields = columns
    .filter((c) => !(c.Key === "PRI" && c.Extra.includes("auto_increment")))
    .map((c) => {
      const joi = mysqlTypeToJoi(c.Type);
      const req = c.Null === "NO" ? ".required()" : ".optional()";
      return `  ${c.Field}: ${joi}${req},`;
    })
    .join("\n");

  const updateFields = columns
    .map((c) => `  ${c.Field}: ${mysqlTypeToJoi(c.Type)}.optional(),`)
    .join("\n");

  const schemaContent = `import Joi from "joi";

export const create${ModuleName}Schema = Joi.object({
${createFields}
});

export const update${ModuleName}Schema = Joi.object({
${updateFields}
});
`;
  safeWrite(schemaFile, schemaContent, FORCE.schema);

  // ==============================
  // REPOSITORY
  // ==============================
  const repoFile = path.join(moduleDir, `${table}.repository.js`);
  const repoContent = `import { ${ModuleName} } from "./${table}.model.js";

export const ${moduleVar}Repository = {
  findAll(options = {}) {
    return ${ModuleName}.findAll(options);
  },
  findById(id) {
    return ${ModuleName}.findByPk(id);
  },
  create(data) {
    return ${ModuleName}.create(data);
  },
  async update(id, data) {
    await ${ModuleName}.update(data, { where: { id } });
    return this.findById(id);
  },
  delete(id) {
    return ${ModuleName}.destroy({ where: { id } });
  }
};
`;
  safeWrite(repoFile, repoContent, FORCE.repository);

  // ==============================
  // SERVICE
  // ==============================
  const serviceFile = path.join(moduleDir, `${table}.service.js`);
  const serviceContent = `import { ${moduleVar}Repository } from "./${table}.repository.js";

export const ${moduleVar}Service = {
  listar() {
    return ${moduleVar}Repository.findAll();
  },
  obtener(id) {
    return ${moduleVar}Repository.findById(id);
  },
  crear(data) {
    return ${moduleVar}Repository.create(data);
  },
  actualizar(id, data) {
    return ${moduleVar}Repository.update(id, data);
  },
  eliminar(id) {
    return ${moduleVar}Repository.delete(id);
  }
};
`;
  safeWrite(serviceFile, serviceContent, FORCE.service);

  // ==============================
  // CONTROLLER
  // ==============================
  const controllerFile = path.join(moduleDir, `${table}.controller.js`);
  const controllerContent = `import { ${moduleVar}Service } from "./${table}.service.js";

export const ${moduleVar}Controller = {
  listar: async (req, res, next) => {
    try {
      res.json({ ok: true, data: await ${moduleVar}Service.listar() });
    } catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try {
      res.json({ ok: true, data: await ${moduleVar}Service.obtener(req.params.id) });
    } catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try {
      res.status(201).json({ ok: true, data: await ${moduleVar}Service.crear(req.body) });
    } catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try {
      res.json({ ok: true, data: await ${moduleVar}Service.actualizar(req.params.id, req.body) });
    } catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try {
      await ${moduleVar}Service.eliminar(req.params.id);
      res.json({ ok: true });
    } catch (e) { next(e); }
  }
};
`;
  safeWrite(controllerFile, controllerContent, FORCE.controller);

  // ==============================
  // ROUTES
  // ==============================
  const routesFile = path.join(moduleDir, `${table}.routes.js`);
  const routesContent = `import express from "express";
import { ${moduleVar}Controller } from "./${table}.controller.js";
import { authRequired } from "../../middleware/auth.middleware.js";
import { allowTo } from "../../security/permissions.js";
import { sensitiveWriteLimiter } from "../../config/rateLimit.config.js";

const router = express.Router();

router.get("/", authRequired, allowTo("${table}:list"), ${moduleVar}Controller.listar);

router.get("/:id", authRequired, allowTo("${table}:get"), ${moduleVar}Controller.obtener);

router.post("/", authRequired, allowTo("${table}:create"), sensitiveWriteLimiter, ${moduleVar}Controller.crear);

router.put("/:id", authRequired, allowTo("${table}:update"), sensitiveWriteLimiter, ${moduleVar}Controller.actualizar);

router.delete("/:id", authRequired, allowTo("${table}:delete"), sensitiveWriteLimiter, ${moduleVar}Controller.eliminar);

export default router;
`;
  safeWrite(routesFile, routesContent, FORCE.routes);
}

// =============================
//  MAIN
// =============================
(async () => {
  console.log("⏳ Conectando a MySQL…");

  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });

  console.log("📡 Conexión OK");
  console.log("🔍 Obteniendo tablas…");

  const [rows] = await conn.query(`SHOW TABLES`);
  const key = Object.keys(rows[0])[0];

  const tables = rows.map((r) => r[key]);

  console.log(`📋 Tablas detectadas (${tables.length}):`, tables);

  for (const t of tables) {
    await generateModule(conn, t);
  }

  await conn.end();
  console.log("\n✅ Finalizado correctamente.\n");
})();
