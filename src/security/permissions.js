/**
 * GENERADOR AUTOMÁTICO DE PERMISOS POR MÓDULO
 * 
 * Cada tabla obtiene:
 *   tabla:list
 *   tabla:get
 *   tabla:create
 *   tabla:update
 *   tabla:delete
 *
 * Los roles:
 *   admin ? acceso total
 *   user  ? list + get
 *   guest ? nada
 */

const modules = [
  "categoria","codigoa","disiplina","especialidaddesmedicas","jefaturas",
  "jefedeptos","ley","ministerios","nomenclador","planta","reparticiones",
  "sexo","tipodecuidado","tipoderesolucion","regimenhorario","localidades",
  "ocupacion","agentes","agentes_servicios","bonificaciones","citaciones",
  "consultas","inconvenientesagentes","ordenesdetrabajo","pedidos","resoluciones",
  "tblarchivos","cc","expedientes","tareas","tareasadquiridias","funciones",
  "ccoodegdeba"
];

/* ?? Permisos generados automáticamente */
const permissions = {};

modules.forEach(m => {
  permissions[m] = [
    `${m}:list`,
    `${m}:get`,
    `${m}:create`,
    `${m}:update`,
    `${m}:delete`
  ];
});

/* ?? Roles y sus permisos */
export const roles = {
  admin: Object.values(permissions).flat(),
  user: Object.keys(permissions).map(m => `${m}:list`).concat(
        Object.keys(permissions).map(m => `${m}:get`)
  ),
  guest: []
};

/* ?? Middleware de autorización */
export const allowTo = (permission) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "No autenticado" });
    }

    const role = req.user.rol;
    const rolePermissions = roles[role] || [];

    if (!rolePermissions.includes(permission)) {
      return res.status(403).json({ error: "No autorizado" });
    }

    next();
  };
};
