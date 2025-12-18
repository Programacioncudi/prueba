import Joi from "joi";

export const createJefedeptosSchema = Joi.object({
  jefedepto: Joi.string().allow(null),
  depto: Joi.string().allow(null),
  oficinacentral: Joi.string().allow(null),
});

export const updateJefedeptosSchema = createJefedeptosSchema.fork(Object.keys(createJefedeptosSchema.describe().keys), (schema) => schema.optional());