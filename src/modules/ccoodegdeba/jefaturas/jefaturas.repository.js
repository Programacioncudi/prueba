
import { Jefaturas } from "./jefaturas.model.js";

export const jefaturasRepository = {
  findAll: () => Jefaturas.findAll(),
  findById: (id) => Jefaturas.findByPk(id),
  create: (data) => Jefaturas.create(data),
  update: (id, data) => Jefaturas.update(data, { where: { id } }),
  delete: (id) => Jefaturas.destroy({ where: { id } })
};
