
import { pedidosRepository } from "./pedidos.repository.js";

export const pedidosService = {
  listar: () => pedidosRepository.findAll(),
  obtener: (id) => pedidosRepository.findById(id),
  crear: (data) => pedidosRepository.create(data),
  actualizar: (id, data) => pedidosRepository.update(id, data),
  eliminar: (id) => pedidosRepository.delete(id)
};
