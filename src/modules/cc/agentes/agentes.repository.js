
import { Agentes } from "./agentes.model.js";

export const agentesRepository = {
  findAll: () => Agentes.findAll(),
  findById: (id) => Agentes.findByPk(id),
  create: (data) => Agentes.create(data),
  update: (id, data) => Agentes.update(data, { where: { id } }),
  delete: (id) => Agentes.destroy({ where: { id } })
};
