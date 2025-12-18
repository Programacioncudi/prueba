import Joi from "joi";

export const createOrdenesdetrabajoSchema = Joi.object({
  dni: Joi.string().required(),
  fecha: Joi.date().iso().allow(null),
  requiere: Joi.string().allow(null),
  descripcion_tarea: Joi.string().allow(null),
  estado: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateOrdenesdetrabajoSchema = createOrdenesdetrabajoSchema.fork(Object.keys(createOrdenesdetrabajoSchema.describe().keys), (schema) => schema.optional());