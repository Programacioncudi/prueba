
import { Ministerios } from "./ministerios.model.js";

export const ministeriosRepository = {
  findAll: () => Ministerios.findAll(),
  findById: (id) => Ministerios.findByPk(id),
  create: (data) => Ministerios.create(data),
  update: (id, data) => Ministerios.update(data, { where: { id } }),
  delete: (id) => Ministerios.destroy({ where: { id } })
};
