import Joi from "joi";

export const createFuncionesSchema = Joi.object({
  funcion: Joi.string().allow(null),
  descripcion: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateFuncionesSchema = createFuncionesSchema.fork(Object.keys(createFuncionesSchema.describe().keys), (schema) => schema.optional());