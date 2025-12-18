
import { consultasRepository } from "./consultas.repository.js";

export const consultasService = {
  listar: () => consultasRepository.findAll(),
  obtener: (id) => consultasRepository.findById(id),
  crear: (data) => consultasRepository.create(data),
  actualizar: (id, data) => consultasRepository.update(id, data),
  eliminar: (id) => consultasRepository.delete(id)
};
