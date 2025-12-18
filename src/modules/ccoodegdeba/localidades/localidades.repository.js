
import { Localidades } from "./localidades.model.js";

export const localidadesRepository = {
  findAll: () => Localidades.findAll(),
  findById: (id) => Localidades.findByPk(id),
  create: (data) => Localidades.create(data),
  update: (id, data) => Localidades.update(data, { where: { id } }),
  delete: (id) => Localidades.destroy({ where: { id } })
};
