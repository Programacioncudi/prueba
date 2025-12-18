import Joi from "joi";

export const createTareasSchema = Joi.object({
  nombre_tarea: Joi.string().allow(null),
  descripcion_tarea: Joi.string().allow(null),
  estado: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  asignado_a: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateTareasSchema = createTareasSchema.fork(Object.keys(createTareasSchema.describe().keys), (schema) => schema.optional());