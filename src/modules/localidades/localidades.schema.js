import Joi from "joi";

export const createLocalidadesSchema = Joi.object({
  provincia_nombre: Joi.string().allow(null),
  municipio_nombre: Joi.string().allow(null),
  localidad_nombre: Joi.string().allow(null),
  municipio_id: Joi.string().allow(null),
  provincia_id: Joi.string().allow(null),
  localidad_codigo: Joi.string().allow(null),
});

export const updateLocalidadesSchema = createLocalidadesSchema.fork(Object.keys(createLocalidadesSchema.describe().keys), (schema) => schema.optional());