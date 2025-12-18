import Joi from "joi";

export const createCcSchema = Joi.object({
  dni: Joi.string().required(),
  observaciones: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateCcSchema = createCcSchema.fork(Object.keys(createCcSchema.describe().keys), (schema) => schema.optional());