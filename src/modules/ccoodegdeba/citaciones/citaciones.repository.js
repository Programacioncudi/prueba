
import { Citaciones } from "./citaciones.model.js";

export const citacionesRepository = {
  findAll: () => Citaciones.findAll(),
  findById: (id) => Citaciones.findByPk(id),
  create: (data) => Citaciones.create(data),
  update: (id, data) => Citaciones.update(data, { where: { id } }),
  delete: (id) => Citaciones.destroy({ where: { id } })
};
