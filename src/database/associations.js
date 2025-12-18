/**
 * Archivo: src/database/associations.js
 * Responsabilidad:
 *   - Declarar todas las asociaciones (relaciones) entre modelos Sequelize basadas en la
 *     estructura REAL de la base MySQL.
 *   - Validar que los modelos y claves foráneas existan antes de asociar.
 *   - Registrar en logs el resultado de cada asociación (éxito o fallo).
 *
 * Notas:
 *   - Este archivo debe importarse UNA sola vez durante el arranque de la aplicación,
 *     idealmente después de inicializar Sequelize (sequelize.authenticate()).
 *   - Ejemplo desde src/server.js o src/app.js:
 *
 *       import "./database/associations.js";
 *
 *   - El logger aquí es simple (usa console), pero puede reemplazarse por un logger
 *     corporativo (Winston, Pino, etc.) manteniendo la misma interfaz.
 */

import { Agentes } from "../modules/agentes/agentes.model.js";
import { Agentes_servicios } from "../modules/agentes_servicios/agentes_servicios.model.js";
import { Bonificaciones } from "../modules/bonificaciones/bonificaciones.model.js";
import { Categoria } from "../modules/categoria/categoria.model.js";
import { Cc } from "../modules/cc/cc.model.js";
import { Citaciones } from "../modules/citaciones/citaciones.model.js";
import { Consultas } from "../modules/consultas/consultas.model.js";
import { Especialidaddesmedicas } from "../modules/especialidaddesmedicas/especialidaddesmedicas.model.js";
import { Expedientes } from "../modules/expedientes/expedientes.model.js";
import { Inconvenientesagentes } from "../modules/inconvenientesagentes/inconvenientesagentes.model.js";
import { Jefaturas } from "../modules/jefaturas/jefaturas.model.js";
import { Ley } from "../modules/ley/ley.model.js";
import { Localidades } from "../modules/localidades/localidades.model.js";
import { Ocupacion } from "../modules/ocupacion/ocupacion.model.js";
import { Ordenesdetrabajo } from "../modules/ordenesdetrabajo/ordenesdetrabajo.model.js";
import { Pedidos } from "../modules/pedidos/pedidos.model.js";
import { Personal } from "../modules/personal/personal.model.js";
import { Planta } from "../modules/planta/planta.model.js";
import { Regimenhorario } from "../modules/regimenhorario/regimenhorario.model.js";
import { Reparticiones } from "../modules/reparticiones/reparticiones.model.js";
import { Resoluciones } from "../modules/resoluciones/resoluciones.model.js";
import { Sexo } from "../modules/sexo/sexo.model.js";
import { Tblarchivos } from "../modules/tblarchivos/tblarchivos.model.js";

// Logger simple; reemplazable por un logger enterprise (Winston, Pino, etc.)
const logger = {
  info: (...args) => console.info("[ASSOCIATIONS][INFO]", ...args),
  warn: (...args) => console.warn("[ASSOCIATIONS][WARN]", ...args),
  error: (...args) => console.error("[ASSOCIATIONS][ERROR]", ...args)
};

/**
 * Helper genérico para asociar una relación 1:N (padre → muchos hijos) de forma segura.
 */
function linkOneToMany({
  parentModel,
  childModel,
  parentName,
  childName,
  foreignKey
}) {
  if (!parentModel || !childModel) {
    logger.error(`No se pudo asociar ${childName} -> ${parentName}: modelo no definido`);
    return;
  }

  const childAttrs = childModel.rawAttributes || {};
  if (!childAttrs[foreignKey]) {
    logger.warn(
      `La clave foránea ${foreignKey} no existe en el modelo ${childName}. ` +
      `Verificar que el modelo y la base estén sincronizados.`
    );
  }

  try {
    // Hijo pertenece a Padre (FK en tabla hija)
    childModel.belongsTo(parentModel, { foreignKey });

    // Padre tiene muchos Hijos
    parentModel.hasMany(childModel, { foreignKey });

    logger.info(`Asociación registrada: ${parentName} (1) ↔ (${foreignKey}) muchos ${childName}`);
  } catch (err) {
    logger.error(
      `Error creando asociación ${childName}.${foreignKey} -> ${parentName}.id: ${err.message}`
    );
  }
}

/**
 * Punto único de configuración de asociaciones.
 * Se ejecuta al importar este módulo.
 */
function setupAssociations() {
  logger.info("Iniciando registro de asociaciones Sequelize basadas en la base MySQL real...");

  /**
   * Relación: ocupacion.regimen_horario_id → regimenhorario.id
   * Un registro de "ocupacion" pertenece a un registro de "regimenhorario". Un "regimenhorario" puede tener muchos "ocupacion".
   */
  linkOneToMany({
    parentModel: Regimenhorario,
    childModel: Ocupacion,
    parentName: "Regimenhorario",
    childName: "Ocupacion",
    foreignKey: "regimen_horario_id"
  });

  /**
   * Relación: ocupacion.especialidad_id → especialidaddesmedicas.id
   * Un registro de "ocupacion" pertenece a un registro de "especialidaddesmedicas". Un "especialidaddesmedicas" puede tener muchos "ocupacion".
   */
  linkOneToMany({
    parentModel: Especialidaddesmedicas,
    childModel: Ocupacion,
    parentName: "Especialidaddesmedicas",
    childName: "Ocupacion",
    foreignKey: "especialidad_id"
  });

  /**
   * Relación: ocupacion.ley_id → ley.id
   * Un registro de "ocupacion" pertenece a un registro de "ley". Un "ley" puede tener muchos "ocupacion".
   */
  linkOneToMany({
    parentModel: Ley,
    childModel: Ocupacion,
    parentName: "Ley",
    childName: "Ocupacion",
    foreignKey: "ley_id"
  });

  /**
   * Relación: personal.sexo_id → sexo.id
   * Un registro de "personal" pertenece a un registro de "sexo". Un "sexo" puede tener muchos "personal".
   */
  linkOneToMany({
    parentModel: Sexo,
    childModel: Personal,
    parentName: "Sexo",
    childName: "Personal",
    foreignKey: "sexo_id"
  });

  /**
   * Relación: personal.localidad_id → localidades.id
   * Un registro de "personal" pertenece a un registro de "localidades". Un "localidades" puede tener muchos "personal".
   */
  linkOneToMany({
    parentModel: Localidades,
    childModel: Personal,
    parentName: "Localidades",
    childName: "Personal",
    foreignKey: "localidad_id"
  });

  /**
   * Relación: agentes.dni → personal.dni
   * Un registro de "agentes" pertenece a un registro de "personal". Un "personal" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Agentes,
    parentName: "Personal",
    childName: "Agentes",
    foreignKey: "dni"
  });

  /**
   * Relación: agentes.planta_id → planta.id
   * Un registro de "agentes" pertenece a un registro de "planta". Un "planta" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Planta,
    childModel: Agentes,
    parentName: "Planta",
    childName: "Agentes",
    foreignKey: "planta_id"
  });

  /**
   * Relación: agentes.categoria_id → categoria.ID
   * Un registro de "agentes" pertenece a un registro de "categoria". Un "categoria" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Categoria,
    childModel: Agentes,
    parentName: "Categoria",
    childName: "Agentes",
    foreignKey: "categoria_id"
  });

  /**
   * Relación: agentes.ocupacion_id → ocupacion.id
   * Un registro de "agentes" pertenece a un registro de "ocupacion". Un "ocupacion" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Ocupacion,
    childModel: Agentes,
    parentName: "Ocupacion",
    childName: "Agentes",
    foreignKey: "ocupacion_id"
  });

  /**
   * Relación: agentes.regimen_horario_id → regimenhorario.id
   * Un registro de "agentes" pertenece a un registro de "regimenhorario". Un "regimenhorario" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Regimenhorario,
    childModel: Agentes,
    parentName: "Regimenhorario",
    childName: "Agentes",
    foreignKey: "regimen_horario_id"
  });

  /**
   * Relación: agentes.ley_id → ley.id
   * Un registro de "agentes" pertenece a un registro de "ley". Un "ley" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Ley,
    childModel: Agentes,
    parentName: "Ley",
    childName: "Agentes",
    foreignKey: "ley_id"
  });

  /**
   * Relación: agentes.sector_id → reparticiones.id
   * Un registro de "agentes" pertenece a un registro de "reparticiones". Un "reparticiones" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Reparticiones,
    childModel: Agentes,
    parentName: "Reparticiones",
    childName: "Agentes",
    foreignKey: "sector_id"
  });

  /**
   * Relación: agentes.jefatura_id → jefaturas.id
   * Un registro de "agentes" pertenece a un registro de "jefaturas". Un "jefaturas" puede tener muchos "agentes".
   */
  linkOneToMany({
    parentModel: Jefaturas,
    childModel: Agentes,
    parentName: "Jefaturas",
    childName: "Agentes",
    foreignKey: "jefatura_id"
  });

  /**
   * Relación: agentes_servicios.dni → personal.dni
   * Un registro de "agentes_servicios" pertenece a un registro de "personal". Un "personal" puede tener muchos "agentes_servicios".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Agentes_servicios,
    parentName: "Personal",
    childName: "Agentes_servicios",
    foreignKey: "dni"
  });

  /**
   * Relación: agentes_servicios.dependencia_id → reparticiones.id
   * Un registro de "agentes_servicios" pertenece a un registro de "reparticiones". Un "reparticiones" puede tener muchos "agentes_servicios".
   */
  linkOneToMany({
    parentModel: Reparticiones,
    childModel: Agentes_servicios,
    parentName: "Reparticiones",
    childName: "Agentes_servicios",
    foreignKey: "dependencia_id"
  });

  /**
   * Relación: bonificaciones.dni → personal.dni
   * Un registro de "bonificaciones" pertenece a un registro de "personal". Un "personal" puede tener muchas "bonificaciones".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Bonificaciones,
    parentName: "Personal",
    childName: "Bonificaciones",
    foreignKey: "dni"
  });

  /**
   * Relación: citaciones.dni → personal.dni
   * Un registro de "citaciones" pertenece a un registro de "personal". Un "personal" puede tener muchas "citaciones".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Citaciones,
    parentName: "Personal",
    childName: "Citaciones",
    foreignKey: "dni"
  });

  /**
   * Relación: consultas.dni → personal.dni
   * Un registro de "consultas" pertenece a un registro de "personal". Un "personal" puede tener muchas "consultas".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Consultas,
    parentName: "Personal",
    childName: "Consultas",
    foreignKey: "dni"
  });

  /**
   * Relación: inconvenientesagentes.dni → personal.dni
   * Un registro de "inconvenientesagentes" pertenece a un registro de "personal". Un "personal" puede tener muchos "inconvenientesagentes".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Inconvenientesagentes,
    parentName: "Personal",
    childName: "Inconvenientesagentes",
    foreignKey: "dni"
  });

  /**
   * Relación: ordenesdetrabajo.dni → personal.dni
   * Un registro de "ordenesdetrabajo" pertenece a un registro de "personal". Un "personal" puede tener muchas "ordenesdetrabajo".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Ordenesdetrabajo,
    parentName: "Personal",
    childName: "Ordenesdetrabajo",
    foreignKey: "dni"
  });

  /**
   * Relación: pedidos.dni → personal.dni
   * Un registro de "pedidos" pertenece a un registro de "personal". Un "personal" puede tener muchos "pedidos".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Pedidos,
    parentName: "Personal",
    childName: "Pedidos",
    foreignKey: "dni"
  });

  /**
   * Relación: resoluciones.dni → personal.dni
   * Un registro de "resoluciones" pertenece a un registro de "personal". Un "personal" puede tener muchas "resoluciones".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Resoluciones,
    parentName: "Personal",
    childName: "Resoluciones",
    foreignKey: "dni"
  });

  /**
   * Relación: tblarchivos.dni → personal.dni
   * Un registro de "tblarchivos" pertenece a un registro de "personal". Un "personal" puede tener muchos "tblarchivos".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Tblarchivos,
    parentName: "Personal",
    childName: "Tblarchivos",
    foreignKey: "dni"
  });

  /**
   * Relación: cc.dni → personal.dni
   * Un registro de "cc" pertenece a un registro de "personal". Un "personal" puede tener muchos "cc".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Cc,
    parentName: "Personal",
    childName: "Cc",
    foreignKey: "dni"
  });

  /**
   * Relación: expedientes.dni → personal.dni
   * Un registro de "expedientes" pertenece a un registro de "personal". Un "personal" puede tener muchos "expedientes".
   */
  linkOneToMany({
    parentModel: Personal,
    childModel: Expedientes,
    parentName: "Personal",
    childName: "Expedientes",
    foreignKey: "dni"
  });

  logger.info("Registro de asociaciones Sequelize completado.");
}

// Ejecutar configuración inmediatamente al importar este archivo
setupAssociations();
