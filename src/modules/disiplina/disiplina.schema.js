import Joi from "joi";

export const createDisiplinaSchema = Joi.object({
  disciplina: Joi.string().required(),
});

export const updateDisiplinaSchema = createDisiplinaSchema.fork(Object.keys(createDisiplinaSchema.describe().keys), (schema) => schema.optional());