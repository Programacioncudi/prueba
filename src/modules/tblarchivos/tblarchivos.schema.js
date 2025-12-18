import Joi from "joi";

export const createTblarchivosSchema = Joi.object({
  dni: Joi.string().required(),
  nombre: Joi.string().allow(null),
  tipo: Joi.string().allow(null),
  tamanio: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  descripcion_archivo: Joi.string().allow(null),
  nombre_archivo_original: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateTblarchivosSchema = createTblarchivosSchema.fork(Object.keys(createTblarchivosSchema.describe().keys), (schema) => schema.optional());