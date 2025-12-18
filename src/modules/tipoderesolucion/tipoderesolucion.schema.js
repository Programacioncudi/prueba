import Joi from "joi";

export const createTipoderesolucionSchema = Joi.object({
  resolucion_nombre: Joi.string().required(),
});

export const updateTipoderesolucionSchema = createTipoderesolucionSchema.fork(Object.keys(createTipoderesolucionSchema.describe().keys), (schema) => schema.optional());