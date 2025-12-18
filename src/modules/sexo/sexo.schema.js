import Joi from "joi";

export const createSexoSchema = Joi.object({
  sexo_nombre: Joi.string().required(),
});

export const updateSexoSchema = createSexoSchema.fork(Object.keys(createSexoSchema.describe().keys), (schema) => schema.optional());