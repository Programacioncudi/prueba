
import { Categoria } from "./categoria.model.js";

export const categoriaRepository = {
  findAll: () => Categoria.findAll(),
  findById: (id) => Categoria.findByPk(id),
  create: (data) => Categoria.create(data),
  update: (id, data) => Categoria.update(data, { where: { id } }),
  delete: (id) => Categoria.destroy({ where: { id } })
};
