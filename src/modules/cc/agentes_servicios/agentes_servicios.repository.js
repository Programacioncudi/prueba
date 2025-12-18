
import { Agentes_servicios } from "./agentes_servicios.model.js";

export const agentes_serviciosRepository = {
  findAll: () => Agentes_servicios.findAll(),
  findById: (id) => Agentes_servicios.findByPk(id),
  create: (data) => Agentes_servicios.create(data),
  update: (id, data) => Agentes_servicios.update(data, { where: { id } }),
  delete: (id) => Agentes_servicios.destroy({ where: { id } })
};
