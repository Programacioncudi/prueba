import Joi from "joi";

export const createCcoodegdebaSchema = Joi.object({
  nro_expediente: Joi.string().allow(null),
  caratula: Joi.string().allow(null),
  fecha_y_zura: Joi.date().iso().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updateCcoodegdebaSchema = createCcoodegdebaSchema.fork(Object.keys(createCcoodegdebaSchema.describe().keys), (schema) => schema.optional());