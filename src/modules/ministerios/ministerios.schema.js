import Joi from "joi";

export const createMinisteriosSchema = Joi.object({
  ministerio: Joi.string().allow(null),
});

export const updateMinisteriosSchema = createMinisteriosSchema.fork(Object.keys(createMinisteriosSchema.describe().keys), (schema) => schema.optional());