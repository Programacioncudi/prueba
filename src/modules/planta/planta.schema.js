import Joi from "joi";

export const createPlantaSchema = Joi.object({
  planta_nombre: Joi.string().allow(null),
});

export const updatePlantaSchema = createPlantaSchema.fork(Object.keys(createPlantaSchema.describe().keys), (schema) => schema.optional());