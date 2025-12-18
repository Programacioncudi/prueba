
import { Ccoodegdeba } from "./ccoodegdeba.model.js";

export const ccoodegdebaRepository = {
  findAll: () => Ccoodegdeba.findAll(),
  findById: (id) => Ccoodegdeba.findByPk(id),
  create: (data) => Ccoodegdeba.create(data),
  update: (id, data) => Ccoodegdeba.update(data, { where: { id } }),
  delete: (id) => Ccoodegdeba.destroy({ where: { id } })
};
