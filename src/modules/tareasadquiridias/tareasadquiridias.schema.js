import Joi from "joi";

export const createTareasadquiridiasSchema = Joi.object({
  tarea: Joi.string().allow(null),
  descripcion_tarea: Joi.string().allow(null),
  estado: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateTareasadquiridiasSchema = createTareasadquiridiasSchema.fork(Object.keys(createTareasadquiridiasSchema.describe().keys), (schema) => schema.optional());