import Joi from "joi";

export const createOcupacionSchema = Joi.object({
  nombre_ocupacion: Joi.string().required(),
  codigo: Joi.number().integer().allow(null),
  regimen_horario_id: Joi.number().integer().allow(null),
  es_insalubre: Joi.boolean().allow(null),
  especialidad_id: Joi.number().integer().allow(null),
  ley_id: Joi.number().integer().allow(null),
  agrupamiento: Joi.string().allow(null),
  grado: Joi.string().allow(null),
  asignacion: Joi.string().allow(null),
  activo: Joi.boolean().allow(null),
});

export const updateOcupacionSchema = createOcupacionSchema.fork(Object.keys(createOcupacionSchema.describe().keys), (schema) => schema.optional());