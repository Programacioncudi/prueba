import Joi from "joi";

export const createUsuariosDominiosSchema = Joi.object({
  usuario_id: Joi.number().integer().required(),
  dominio_id: Joi.number().integer().required(),
});

export const updateUsuariosDominiosSchema = createUsuariosDominiosSchema.fork(Object.keys(createUsuariosDominiosSchema.describe().keys), (schema) => schema.optional());