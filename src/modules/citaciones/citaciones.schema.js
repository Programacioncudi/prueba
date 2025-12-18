import Joi from "joi";

export const createCitacionesSchema = Joi.object({
  dni: Joi.string().required(),
  citado_por: Joi.string().allow(null),
  motivo: Joi.string().allow(null),
  citacion_activa: Joi.boolean().allow(null),
  fecha_citacion: Joi.date().iso().allow(null),
  cierre_citacion: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateCitacionesSchema = createCitacionesSchema.fork(Object.keys(createCitacionesSchema.describe().keys), (schema) => schema.optional());