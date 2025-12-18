
import { Ley } from "./ley.model.js";

export const leyRepository = {
  findAll: () => Ley.findAll(),
  findById: (id) => Ley.findByPk(id),
  create: (data) => Ley.create(data),
  update: (id, data) => Ley.update(data, { where: { id } }),
  delete: (id) => Ley.destroy({ where: { id } })
};
