import Joi from "joi";

export const createConsultasSchema = Joi.object({
  dni: Joi.string().required(),
  motivo_consulta: Joi.string().allow(null),
  explicacion: Joi.string().allow(null),
  atendido_por: Joi.string().allow(null),
  hora_atencion: Joi.date().iso().allow(null),
  impreso: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateConsultasSchema = createConsultasSchema.fork(Object.keys(createConsultasSchema.describe().keys), (schema) => schema.optional());