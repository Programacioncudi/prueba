
import { Expedientes } from "./expedientes.model.js";

export const expedientesRepository = {
  findAll: () => Expedientes.findAll(),
  findById: (id) => Expedientes.findByPk(id),
  create: (data) => Expedientes.create(data),
  update: (id, data) => Expedientes.update(data, { where: { id } }),
  delete: (id) => Expedientes.destroy({ where: { id } })
};
