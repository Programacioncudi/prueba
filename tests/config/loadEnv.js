import dotenv from "dotenv";
import path from "path";

const envFile = `.env/.env.${process.env.NODE_ENV || "development"}`;

// ✅ AGREGADO: Cargar el archivo .env
dotenv.config({ path: envFile });

console.log(`[TEST-ENV] Cargado ${envFile} correctamente`);
