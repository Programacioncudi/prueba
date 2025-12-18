
import { Especialidaddesmedicas } from "./especialidaddesmedicas.model.js";

export const especialidaddesmedicasRepository = {
  findAll: () => Especialidaddesmedicas.findAll(),
  findById: (id) => Especialidaddesmedicas.findByPk(id),
  create: (data) => Especialidaddesmedicas.create(data),
  update: (id, data) => Especialidaddesmedicas.update(data, { where: { id } }),
  delete: (id) => Especialidaddesmedicas.destroy({ where: { id } })
};
