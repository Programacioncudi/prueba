
import { Planta } from "./planta.model.js";

export const plantaRepository = {
  findAll: () => Planta.findAll(),
  findById: (id) => Planta.findByPk(id),
  create: (data) => Planta.create(data),
  update: (id, data) => Planta.update(data, { where: { id } }),
  delete: (id) => Planta.destroy({ where: { id } })
};
