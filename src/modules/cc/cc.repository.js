
import { Cc } from "./cc.model.js";

export const ccRepository = {
  findAll: () => Cc.findAll(),
  findById: (id) => Cc.findByPk(id),
  create: (data) => Cc.create(data),
  update: (id, data) => Cc.update(data, { where: { id } }),
  delete: (id) => Cc.destroy({ where: { id } })
};
