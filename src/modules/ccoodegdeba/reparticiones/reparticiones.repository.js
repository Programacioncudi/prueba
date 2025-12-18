
import { Reparticiones } from "./reparticiones.model.js";

export const reparticionesRepository = {
  findAll: () => Reparticiones.findAll(),
  findById: (id) => Reparticiones.findByPk(id),
  create: (data) => Reparticiones.create(data),
  update: (id, data) => Reparticiones.update(data, { where: { id } }),
  delete: (id) => Reparticiones.destroy({ where: { id } })
};
