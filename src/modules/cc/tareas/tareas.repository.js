
import { Tareas } from "./tareas.model.js";

export const tareasRepository = {
  findAll: () => Tareas.findAll(),
  findById: (id) => Tareas.findByPk(id),
  create: (data) => Tareas.create(data),
  update: (id, data) => Tareas.update(data, { where: { id } }),
  delete: (id) => Tareas.destroy({ where: { id } })
};
