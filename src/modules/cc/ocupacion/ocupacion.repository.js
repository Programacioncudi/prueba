
import { Ocupacion } from "./ocupacion.model.js";

export const ocupacionRepository = {
  findAll: () => Ocupacion.findAll(),
  findById: (id) => Ocupacion.findByPk(id),
  create: (data) => Ocupacion.create(data),
  update: (id, data) => Ocupacion.update(data, { where: { id } }),
  delete: (id) => Ocupacion.destroy({ where: { id } })
};
