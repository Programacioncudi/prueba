import Joi from "joi";

export const createLeySchema = Joi.object({
  ley_nombre: Joi.string().allow(null),
  codigoexp: Joi.number().integer().allow(null),
  leyactiva: Joi.boolean().allow(null),
});

export const updateLeySchema = createLeySchema.fork(Object.keys(createLeySchema.describe().keys), (schema) => schema.optional());