
import { Inconvenientesagentes } from "./inconvenientesagentes.model.js";

export const inconvenientesagentesRepository = {
  findAll: () => Inconvenientesagentes.findAll(),
  findById: (id) => Inconvenientesagentes.findByPk(id),
  create: (data) => Inconvenientesagentes.create(data),
  update: (id, data) => Inconvenientesagentes.update(data, { where: { id } }),
  delete: (id) => Inconvenientesagentes.destroy({ where: { id } })
};
