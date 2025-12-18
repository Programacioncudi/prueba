// src/factory/valueGenerators.js
import { randomInt } from "crypto";

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomString = (len = 10) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
};

const randomEmail = () => {
  const providers = ["gmail.com", "yahoo.com", "hotmail.com", "empresa.com"];
  return `${randomString(8).toLowerCase()}@${randomFrom(providers)}`;
};

const randomDatePast = () => {
  const now = Date.now();
  const offset = randomInt(0, 1000 * 60 * 60 * 24 * 365 * 5); // 5 años
  return new Date(now - offset);
};

const randomPhone = () => {
  return `11${randomInt(10000000, 99999999)}`;
};

const randomDni = () => randomInt(10000000, 50000000);

const randomBool = () => Math.random() < 0.5;

const randomNombre = () =>
  randomFrom(["Juan", "María", "Carlos", "Ana", "Luis", "Lucía", "Miguel"]);

const randomApellido = () =>
  randomFrom(["Gómez", "Pérez", "Rodríguez", "Fernández", "López", "Sosa"]);

export function generateValueForColumn(columnName, columnDef) {
  const type = (columnDef.type || "").toLowerCase();

  // Campos comunes por nombre
  if (columnName === "email" || columnName.endsWith("_email")) {
    return randomEmail();
  }

  if (columnName === "dni" || columnName.endsWith("_dni")) {
    return randomDni();
  }

  if (columnName === "nombre" || columnName.endsWith("_nombre")) {
    return randomNombre();
  }

  if (columnName === "apellido" || columnName.endsWith("_apellido")) {
    return randomApellido();
  }

  if (columnName.includes("telefono") || columnName.includes("celular")) {
    return randomPhone();
  }

  if (columnName === "estado" || columnName.endsWith("_estado")) {
    return randomFrom(["activo", "inactivo", "pendiente"]);
  }

  if (columnName === "created_at" || columnName === "creado_en") {
    return randomDatePast();
  }

  if (columnName === "updated_at" || columnName === "actualizado_en") {
    return randomDatePast();
  }

  // Claves foráneas: *_id
  if (columnName.endsWith("_id")) {
    // Por defecto, 1 (asumiendo que hay al menos un registro padre)
    return 1;
  }

  // Por tipo
  if (type.includes("int")) {
    return randomInt(0, 1000);
  }

  if (type.includes("decimal") || type.includes("numeric")) {
    return (Math.random() * 1000).toFixed(2);
  }

  if (type.includes("date") || type.includes("time")) {
    return randomDatePast();
  }

  if (type.includes("bool") || type.includes("tinyint(1)")) {
    return randomBool();
  }

  if (type.includes("char") || type.includes("text")) {
    return randomString(Math.min(20, columnDef.length || 20));
  }

  // Fallback
  return null;
}
