import Joi from "joi";

export const createExpedientesSchema = Joi.object({
  dni: Joi.string().required(),
  numero: Joi.string().allow(null),
  caratula: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  estado: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateExpedientesSchema = createExpedientesSchema.fork(Object.keys(createExpedientesSchema.describe().keys), (schema) => schema.optional());