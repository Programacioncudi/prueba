
import { Funciones } from "./funciones.model.js";

export const funcionesRepository = {
  findAll: () => Funciones.findAll(),
  findById: (id) => Funciones.findByPk(id),
  create: (data) => Funciones.create(data),
  update: (id, data) => Funciones.update(data, { where: { id } }),
  delete: (id) => Funciones.destroy({ where: { id } })
};
