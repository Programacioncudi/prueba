
import { Ordenesdetrabajo } from "./ordenesdetrabajo.model.js";

export const ordenesdetrabajoRepository = {
  findAll: () => Ordenesdetrabajo.findAll(),
  findById: (id) => Ordenesdetrabajo.findByPk(id),
  create: (data) => Ordenesdetrabajo.create(data),
  update: (id, data) => Ordenesdetrabajo.update(data, { where: { id } }),
  delete: (id) => Ordenesdetrabajo.destroy({ where: { id } })
};
