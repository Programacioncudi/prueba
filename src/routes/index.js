// src/routes/index.js
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Auto-registro de rutas enterprise
 * Compatible con Windows + ESM
 */
export const registerRoutes = async (
  app,
  { basePath = "/api", blacklist = ["auth"] } = {}
) => {
  const modulesPath = path.join(__dirname, "../modules");

  const modules = fs
    .readdirSync(modulesPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !blacklist.includes(name));

  for (const moduleName of modules) {
    const routesFilePath = path.join(
      modulesPath,
      moduleName,
      `${moduleName}.routes.js`
    );

    if (!fs.existsSync(routesFilePath)) continue;

    try {
      // 🔑 CONVERSIÓN CLAVE PARA WINDOWS + ESM
      const routesUrl = pathToFileURL(routesFilePath).href;
      const routerModule = await import(routesUrl);

      if (!routerModule.default) {
        throw new Error("El módulo no exporta default");
      }

      app.use(`${basePath}/${moduleName}`, routerModule.default);

      console.log(`🧩 Ruta montada: ${basePath}/${moduleName}`);
    } catch (err) {
      console.error(
        `❌ Error cargando rutas del módulo ${moduleName}`,
        err.message
      );
    }
  }
};
