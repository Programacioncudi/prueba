import Joi from "joi";

export const createEspecialidaddesmedicasSchema = Joi.object({
  especialidad: Joi.string().allow(null),
  profesion_referencia: Joi.number().integer().allow(null),
});

export const updateEspecialidaddesmedicasSchema = createEspecialidaddesmedicasSchema.fork(Object.keys(createEspecialidaddesmedicasSchema.describe().keys), (schema) => schema.optional());