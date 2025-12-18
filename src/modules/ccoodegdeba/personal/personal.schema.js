import Joi from "joi";

/**
 * Validación de datos de personal.
 */

export const createPersonalSchema = Joi.object({
  dni: Joi.string().max(20).required(),
  apellido: Joi.string().max(100).required(),
  nombre: Joi.string().max(100).required(),
  fecha_nacimiento: Joi.date().optional().allow(null),
  sexo_id: Joi.number().integer().optional().allow(null),
  telefono: Joi.string().max(50).optional().allow(null),
  email: Joi.string().email().optional().allow(null),
  domicilio: Joi.string().max(200).optional().allow(null),
  localidad_id: Joi.number().integer().optional().allow(null),
  cuil: Joi.string().max(20).optional().allow(null),
  nacionalidad: Joi.string().max(50).optional().allow(null),
  observaciones: Joi.string().optional().allow(null)
});

export const updatePersonalSchema = createPersonalSchema.fork(
  ["dni"],
  (schema) => schema.optional()
);
