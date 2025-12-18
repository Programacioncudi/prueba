import Joi from "joi";

export const createNomencladorSchema = Joi.object({
  cargo: Joi.string().allow(null),
  tareas: Joi.number().integer().allow(null),
});

export const updateNomencladorSchema = createNomencladorSchema.fork(Object.keys(createNomencladorSchema.describe().keys), (schema) => schema.optional());