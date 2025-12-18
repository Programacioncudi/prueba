
import { Tipoderesolucion } from "./tipoderesolucion.model.js";

export const tipoderesolucionRepository = {
  findAll: () => Tipoderesolucion.findAll(),
  findById: (id) => Tipoderesolucion.findByPk(id),
  create: (data) => Tipoderesolucion.create(data),
  update: (id, data) => Tipoderesolucion.update(data, { where: { id } }),
  delete: (id) => Tipoderesolucion.destroy({ where: { id } })
};
