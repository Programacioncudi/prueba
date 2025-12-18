
import { Nomenclador } from "./nomenclador.model.js";

export const nomencladorRepository = {
  findAll: () => Nomenclador.findAll(),
  findById: (id) => Nomenclador.findByPk(id),
  create: (data) => Nomenclador.create(data),
  update: (id, data) => Nomenclador.update(data, { where: { id } }),
  delete: (id) => Nomenclador.destroy({ where: { id } })
};
