import Joi from "joi";

export const createPersonalSchema = Joi.object({
  dni: Joi.string().required(),
  apellido: Joi.string().required(),
  nombre: Joi.string().required(),
  fecha_nacimiento: Joi.date().iso().allow(null),
  sexo_id: Joi.number().integer().allow(null),
  telefono: Joi.string().allow(null),
  email: Joi.string().allow(null),
  domicilio: Joi.string().allow(null),
  localidad_id: Joi.number().integer().allow(null),
  cuil: Joi.string().allow(null),
  nacionalidad: Joi.string().allow(null),
  observaciones: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updatePersonalSchema = createPersonalSchema.fork(Object.keys(createPersonalSchema.describe().keys), (schema) => schema.optional());