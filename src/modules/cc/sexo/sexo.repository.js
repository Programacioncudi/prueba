
import { Sexo } from "./sexo.model.js";

export const sexoRepository = {
  findAll: () => Sexo.findAll(),
  findById: (id) => Sexo.findByPk(id),
  create: (data) => Sexo.create(data),
  update: (id, data) => Sexo.update(data, { where: { id } }),
  delete: (id) => Sexo.destroy({ where: { id } })
};
