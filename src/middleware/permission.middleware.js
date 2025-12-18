// src/middleware/permission.middleware.js
import { Usuario } from "../modules/rbac/rbac.models.js";

/**
 * Middleware para chequear permisos basados en RBAC.
 * Uso:
 *   router.get("/ruta", authRequired, allow("cc:planta:listar"), controller.listar);
 */
export const allow = (permisoClave) => {
  return async (req, res, next) => {
    try {
      if (!req.user?.id) {
        return res
          .status(401)
          .json({ ok: false, error: "Usuario no autenticado" });
      }

      const usuario = await Usuario.findByPk(req.user.id, {
        include: [
          {
            association: "rol",
            include: [{ association: "permisos" }],
          },
        ],
      });

      if (!usuario || !usuario.rol) {
        return res
          .status(403)
          .json({ ok: false, error: "Usuario sin rol asignado" });
      }

      const claves = usuario.rol.permisos.map((p) => p.clave);
      if (!claves.includes(permisoClave)) {
        return res.status(403).json({
          ok: false,
          error: `No tiene permiso requerido: ${permisoClave}`,
        });
      }

      return next();
    } catch (err) {
      return res.status(500).json({
        ok: false,
        error: "Error verificando permisos",
      });
    }
  };
};
