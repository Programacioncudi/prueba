
import { leyRepository } from "./ley.repository.js";

export const leyService = {
  listar: () => leyRepository.findAll(),
  obtener: (id) => leyRepository.findById(id),
  crear: (data) => leyRepository.create(data),
  actualizar: (id, data) => leyRepository.update(id, data),
  eliminar: (id) => leyRepository.delete(id)
};
