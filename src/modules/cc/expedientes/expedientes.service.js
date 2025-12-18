
import { expedientesRepository } from "./expedientes.repository.js";

export const expedientesService = {
  listar: () => expedientesRepository.findAll(),
  obtener: (id) => expedientesRepository.findById(id),
  crear: (data) => expedientesRepository.create(data),
  actualizar: (id, data) => expedientesRepository.update(id, data),
  eliminar: (id) => expedientesRepository.delete(id)
};
