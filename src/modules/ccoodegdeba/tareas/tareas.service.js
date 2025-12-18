
import { tareasRepository } from "./tareas.repository.js";

export const tareasService = {
  listar: () => tareasRepository.findAll(),
  obtener: (id) => tareasRepository.findById(id),
  crear: (data) => tareasRepository.create(data),
  actualizar: (id, data) => tareasRepository.update(id, data),
  eliminar: (id) => tareasRepository.delete(id)
};
