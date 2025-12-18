import Joi from "joi";

export const createCategoriaSchema = Joi.object({
  CATEGORIA: Joi.number().integer().allow(null),
});

export const updateCategoriaSchema = createCategoriaSchema.fork(Object.keys(createCategoriaSchema.describe().keys), (schema) => schema.optional());