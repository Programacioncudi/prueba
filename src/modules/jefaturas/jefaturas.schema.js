import Joi from "joi";

export const createJefaturasSchema = Joi.object({
  sector: Joi.string().allow(null),
  jefe: Joi.string().allow(null),
});

export const updateJefaturasSchema = createJefaturasSchema.fork(Object.keys(createJefaturasSchema.describe().keys), (schema) => schema.optional());