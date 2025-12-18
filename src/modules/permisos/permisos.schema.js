import Joi from "joi";

export const createPermisosSchema = Joi.object({
  clave: Joi.string().required(),
  descripcion: Joi.string().allow(null),
  dominio_id: Joi.number().integer().allow(null),
});

export const updatePermisosSchema = createPermisosSchema.fork(Object.keys(createPermisosSchema.describe().keys), (schema) => schema.optional());