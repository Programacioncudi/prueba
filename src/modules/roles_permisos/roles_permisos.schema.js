import Joi from "joi";

export const createRolesPermisosSchema = Joi.object({
  rol_id: Joi.number().integer().required(),
  permiso_id: Joi.number().integer().required(),
});

export const updateRolesPermisosSchema = createRolesPermisosSchema.fork(Object.keys(createRolesPermisosSchema.describe().keys), (schema) => schema.optional());