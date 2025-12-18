
import { ocupacionRepository } from "./ocupacion.repository.js";

export const ocupacionService = {
  listar: () => ocupacionRepository.findAll(),
  obtener: (id) => ocupacionRepository.findById(id),
  crear: (data) => ocupacionRepository.create(data),
  actualizar: (id, data) => ocupacionRepository.update(id, data),
  eliminar: (id) => ocupacionRepository.delete(id)
};
