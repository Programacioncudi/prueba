
import { Jefedeptos } from "./jefedeptos.model.js";

export const jefedeptosRepository = {
  findAll: () => Jefedeptos.findAll(),
  findById: (id) => Jefedeptos.findByPk(id),
  create: (data) => Jefedeptos.create(data),
  update: (id, data) => Jefedeptos.update(data, { where: { id } }),
  delete: (id) => Jefedeptos.destroy({ where: { id } })
};
