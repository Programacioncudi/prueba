import Joi from "joi";

export const createRegimenhorarioSchema = Joi.object({
  regimen_horario: Joi.number().integer().allow(null),
});

export const updateRegimenhorarioSchema = createRegimenhorarioSchema.fork(Object.keys(createRegimenhorarioSchema.describe().keys), (schema) => schema.optional());