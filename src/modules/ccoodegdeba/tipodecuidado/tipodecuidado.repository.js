
import { Tipodecuidado } from "./tipodecuidado.model.js";

export const tipodecuidadoRepository = {
  findAll: () => Tipodecuidado.findAll(),
  findById: (id) => Tipodecuidado.findByPk(id),
  create: (data) => Tipodecuidado.create(data),
  update: (id, data) => Tipodecuidado.update(data, { where: { id } }),
  delete: (id) => Tipodecuidado.destroy({ where: { id } })
};
