import Joi from "joi";

export const createTipodecuidadoSchema = Joi.object({
  cuidado_nombre: Joi.string().required(),
});

export const updateTipodecuidadoSchema = createTipodecuidadoSchema.fork(Object.keys(createTipodecuidadoSchema.describe().keys), (schema) => schema.optional());