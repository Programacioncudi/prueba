import Joi from "joi";

export const createReparticionesSchema = Joi.object({
  reparticion_nombre: Joi.string().required(),
});

export const updateReparticionesSchema = createReparticionesSchema.fork(Object.keys(createReparticionesSchema.describe().keys), (schema) => schema.optional());