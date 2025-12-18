import Joi from "joi";

export const createBonificacionesSchema = Joi.object({
  dni: Joi.string().required(),
  decreto_numero: Joi.string().allow(null),
  motivo: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  anio: Joi.number().integer().allow(null),
  observaciones: Joi.string().allow(null),
});

export const updateBonificacionesSchema = createBonificacionesSchema.fork(Object.keys(createBonificacionesSchema.describe().keys), (schema) => schema.optional());