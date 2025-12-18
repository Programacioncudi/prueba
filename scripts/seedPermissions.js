/**
 * Seeder ENTERPRISE para poblar dominios, permisos y roles base
 * usando automatically-generated permissions.auto.json
 */

import "../src/config/env.config.js";
import { sequelize } from "../src/config/db.config.js";
import fs from "fs";
import path from "path";
import { logger } from "../src/utils/logger.js";

import {
  Dominio,
  Permiso,
  Rol,
  RolPermiso,
} from "../src/modules/rbac/rbac.models.js";

// Ruta del archivo generado automáticamente
const PERMISSIONS_FILE = path.join(
  "src",
  "security",
  "permissions",
  "permissions.auto.json"
);

// Roles base enterprise
const ROLES_BASE = {
  admin: "Acceso total a todos los módulos",
  supervisor: "Gestión completa excepto acciones críticas",
  operador: "Operación diaria con acciones comunes",
  consulta: "Acceso de solo lectura",
};

// Permisos por rol (convención RBAC estándar)
const ROLE_POLICIES = {
  admin: ["*:*:*"], // TODOS los permisos
  supervisor: ["*:editar", "*:ver", "*:listar"],
  operador: ["*:crear", "*:ver", "*:listar"],
  consulta: ["*:ver", "*:listar"],
};

function permisoCoincide(permiso, patron) {
  if (patron === "*:*:*") return true;

  // ej: "*:listar"
  if (patron.startsWith("*:")) {
    const accion = patron.replace("*:", "");
    return permiso.endsWith(`:${accion}`);
  }

  return false;
}

async function seed() {
  logger.info("🚀 Iniciando seeder ENTERPRISE de permisos…");

  try {
    await sequelize.authenticate();
    logger.info("🟢 Conexión con MySQL OK");

    if (!fs.existsSync(PERMISSIONS_FILE)) {
      throw new Error("❌ No existe permissions.auto.json. Generalo primero.");
    }

    const raw = fs.readFileSync(PERMISSIONS_FILE);
    const data = JSON.parse(raw);

    /** ============================
     * 1) Crear DOMINIOS
     * ============================ */
    logger.info("📦 Creando dominios…");

    const dominioRecords = {};
    for (const dominio of Object.keys(data.dominios)) {
      const [record] = await Dominio.findOrCreate({
        where: { nombre: dominio },
      });
      dominioRecords[dominio] = record;
    }

    /** ============================
     * 2) Crear PERMISOS
     * ============================ */
    logger.info("📦 Creando permisos…");

    const permisoRecords = {};
    for (const permisoClave of data.permisos) {
      const [dominio, recurso, accion] = permisoClave.split(":");

      const [record] = await Permiso.findOrCreate({
        where: { clave: permisoClave },
        defaults: {
          descripcion: `${accion} ${recurso}`,
          dominio_id: dominioRecords[dominio]?.id ?? null,
        },
      });

      permisoRecords[permisoClave] = record;
    }

    /** ============================
     * 3) Crear ROLES base
     * ============================ */
    logger.info("📦 Creando roles base…");

    const roles = {};
    for (const [nombre, descripcion] of Object.entries(ROLES_BASE)) {
      const [role] = await Rol.findOrCreate({
        where: { nombre },
        defaults: { descripcion },
      });
      roles[nombre] = role;
    }

    /** ============================
     * 4) Asignar PERMISOS a ROLES
     * ============================ */
    logger.info("📦 Asignando permisos a roles base…");

    // Limpieza previa (opcional)
    await RolPermiso.destroy({ where: {} });

    for (const [nombreRol, patrones] of Object.entries(ROLE_POLICIES)) {
      const role = roles[nombreRol];

      for (const permisoClave of Object.keys(permisoRecords)) {
        const record = permisoRecords[permisoClave];

        const coincide = patrones.some((patron) =>
          permisoCoincide(permisoClave, patron)
        );

        if (coincide) {
          await RolPermiso.findOrCreate({
            where: {
              rol_id: role.id,
              permiso_id: record.id,
            },
          });
        }
      }
    }

    logger.info("✅ Seeder enterprise completado con éxito.");
    process.exit(0);
  } catch (err) {
    logger.error("❌ ERROR en seeder enterprise", {
      message: err.message,
      stack: err.stack,
    });
    process.exit(1);
  }
}

seed();
