
import { ministeriosRepository } from "./ministerios.repository.js";

export const ministeriosService = {
  listar: () => ministeriosRepository.findAll(),
  obtener: (id) => ministeriosRepository.findById(id),
  crear: (data) => ministeriosRepository.create(data),
  actualizar: (id, data) => ministeriosRepository.update(id, data),
  eliminar: (id) => ministeriosRepository.delete(id)
};
