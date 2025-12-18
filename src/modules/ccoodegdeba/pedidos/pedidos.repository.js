
import { Pedidos } from "./pedidos.model.js";

export const pedidosRepository = {
  findAll: () => Pedidos.findAll(),
  findById: (id) => Pedidos.findByPk(id),
  create: (data) => Pedidos.create(data),
  update: (id, data) => Pedidos.update(data, { where: { id } }),
  delete: (id) => Pedidos.destroy({ where: { id } })
};
