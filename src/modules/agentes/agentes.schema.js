import Joi from "joi";

export const createAgentesSchema = Joi.object({
  dni: Joi.string().required(),
  planta_id: Joi.number().integer().allow(null),
  categoria_id: Joi.number().integer().allow(null),
  ocupacion_id: Joi.number().integer().allow(null),
  regimen_horario_id: Joi.number().integer().allow(null),
  ley_id: Joi.number().integer().allow(null),
  sector_id: Joi.number().integer().allow(null),
  jefatura_id: Joi.number().integer().allow(null),
  fecha_ingreso: Joi.date().iso().allow(null),
  fecha_baja: Joi.date().iso().allow(null),
  estado_empleo: Joi.string().valid('ACTIVO', 'INACTIVO', 'BAJA').allow(null),
  salario_mensual: Joi.number().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateAgentesSchema = createAgentesSchema.fork(Object.keys(createAgentesSchema.describe().keys), (schema) => schema.optional());