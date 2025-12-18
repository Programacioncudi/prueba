
import { Consultas } from "./consultas.model.js";

export const consultasRepository = {
  findAll: () => Consultas.findAll(),
  findById: (id) => Consultas.findByPk(id),
  create: (data) => Consultas.create(data),
  update: (id, data) => Consultas.update(data, { where: { id } }),
  delete: (id) => Consultas.destroy({ where: { id } })
};
