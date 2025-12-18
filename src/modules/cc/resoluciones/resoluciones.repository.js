
import { Resoluciones } from "./resoluciones.model.js";

export const resolucionesRepository = {
  findAll: () => Resoluciones.findAll(),
  findById: (id) => Resoluciones.findByPk(id),
  create: (data) => Resoluciones.create(data),
  update: (id, data) => Resoluciones.update(data, { where: { id } }),
  delete: (id) => Resoluciones.destroy({ where: { id } })
};
