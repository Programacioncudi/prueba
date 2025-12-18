
import { Tareasadquiridias } from "./tareasadquiridias.model.js";

export const tareasadquiridiasRepository = {
  findAll: () => Tareasadquiridias.findAll(),
  findById: (id) => Tareasadquiridias.findByPk(id),
  create: (data) => Tareasadquiridias.create(data),
  update: (id, data) => Tareasadquiridias.update(data, { where: { id } }),
  delete: (id) => Tareasadquiridias.destroy({ where: { id } })
};
