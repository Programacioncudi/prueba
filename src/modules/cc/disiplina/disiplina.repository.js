
import { Disiplina } from "./disiplina.model.js";

export const disiplinaRepository = {
  findAll: () => Disiplina.findAll(),
  findById: (id) => Disiplina.findByPk(id),
  create: (data) => Disiplina.create(data),
  update: (id, data) => Disiplina.update(data, { where: { id } }),
  delete: (id) => Disiplina.destroy({ where: { id } })
};
