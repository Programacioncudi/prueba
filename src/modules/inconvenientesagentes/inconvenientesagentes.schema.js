import Joi from "joi";

export const createInconvenientesagentesSchema = Joi.object({
  dni: Joi.string().required(),
  motivo: Joi.string().allow(null),
  observaciones: Joi.string().allow(null),
  fecha_incidente: Joi.date().iso().allow(null),
  fecha_desde: Joi.date().iso().allow(null),
  fecha_hasta: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateInconvenientesagentesSchema = createInconvenientesagentesSchema.fork(Object.keys(createInconvenientesagentesSchema.describe().keys), (schema) => schema.optional());