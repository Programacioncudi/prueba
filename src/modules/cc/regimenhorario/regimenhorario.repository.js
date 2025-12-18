
import { Regimenhorario } from "./regimenhorario.model.js";

export const regimenhorarioRepository = {
  findAll: () => Regimenhorario.findAll(),
  findById: (id) => Regimenhorario.findByPk(id),
  create: (data) => Regimenhorario.create(data),
  update: (id, data) => Regimenhorario.update(data, { where: { id } }),
  delete: (id) => Regimenhorario.destroy({ where: { id } })
};
