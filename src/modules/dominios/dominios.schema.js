import Joi from "joi";

export const createDominiosSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null),
});

export const updateDominiosSchema = createDominiosSchema.fork(Object.keys(createDominiosSchema.describe().keys), (schema) => schema.optional());