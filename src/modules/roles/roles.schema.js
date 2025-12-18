import Joi from "joi";

export const createRolesSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null),
});

export const updateRolesSchema = createRolesSchema.fork(Object.keys(createRolesSchema.describe().keys), (schema) => schema.optional());