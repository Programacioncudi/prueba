import Joi from "joi";

export const createPedidosSchema = Joi.object({
  dni: Joi.string().required(),
  pedido: Joi.string().allow(null),
  fecha: Joi.date().iso().allow(null),
  lugar: Joi.string().allow(null),
  estado: Joi.string().allow(null),
  created_at: Joi.date().iso().allow(null),
  updated_at: Joi.date().iso().allow(null),
});

export const updatePedidosSchema = createPedidosSchema.fork(Object.keys(createPedidosSchema.describe().keys), (schema) => schema.optional());