import Joi from "joi";

export const createCodigoaSchema = Joi.object({
  codigo: Joi.string().required(),
  observacion: Joi.string().allow(null),
});

export const updateCodigoaSchema = createCodigoaSchema.fork(Object.keys(createCodigoaSchema.describe().keys), (schema) => schema.optional());