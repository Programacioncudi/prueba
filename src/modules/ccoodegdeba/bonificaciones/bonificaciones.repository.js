
import { Bonificaciones } from "./bonificaciones.model.js";

export const bonificacionesRepository = {
  findAll: () => Bonificaciones.findAll(),
  findById: (id) => Bonificaciones.findByPk(id),
  create: (data) => Bonificaciones.create(data),
  update: (id, data) => Bonificaciones.update(data, { where: { id } }),
  delete: (id) => Bonificaciones.destroy({ where: { id } })
};
