import Joi from "joi";

export const createUsuariosSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  nombre: Joi.string().allow(null),
  estado: Joi.string().valid('activo', 'inactivo').allow(null),
  creado_en: Joi.date().iso().allow(null),
  actualizado_en: Joi.date().iso().allow(null),
});

export const updateUsuariosSchema = createUsuariosSchema.fork(Object.keys(createUsuariosSchema.describe().keys), (schema) => schema.optional());