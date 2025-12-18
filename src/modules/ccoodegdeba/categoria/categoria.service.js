
import { categoriaRepository } from "./categoria.repository.js";

export const categoriaService = {
  listar: () => categoriaRepository.findAll(),
  obtener: (id) => categoriaRepository.findById(id),
  crear: (data) => categoriaRepository.create(data),
  actualizar: (id, data) => categoriaRepository.update(id, data),
  eliminar: (id) => categoriaRepository.delete(id)
};
