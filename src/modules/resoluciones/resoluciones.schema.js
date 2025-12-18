import Joi from "joi";

export const createResolucionesSchema = Joi.object({
  dni: Joi.string().required(),
  motivo: Joi.string().allow(null),
  observaciones: Joi.string().allow(null),
  numero: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateResolucionesSchema = createResolucionesSchema.fork(Object.keys(createResolucionesSchema.describe().keys), (schema) => schema.optional());