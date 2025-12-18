import Joi from "joi";

export const createAgentesServiciosSchema = Joi.object({
  dni: Joi.string().required(),
  dependencia_id: Joi.number().integer().allow(null),
  servicio_nombre: Joi.string().allow(null),
  jefe_nombre: Joi.string().allow(null),
  fecha_desde: Joi.date().iso().allow(null),
  fecha_hasta: Joi.date().iso().allow(null),
  motivo: Joi.string().allow(null),
  observaciones: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateAgentesServiciosSchema = createAgentesServiciosSchema.fork(Object.keys(createAgentesServiciosSchema.describe().keys), (schema) => schema.optional());