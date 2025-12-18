
import { citacionesRepository } from "./citaciones.repository.js";

export const citacionesService = {
  listar: () => citacionesRepository.findAll(),
  obtener: (id) => citacionesRepository.findById(id),
  crear: (data) => citacionesRepository.create(data),
  actualizar: (id, data) => citacionesRepository.update(id, data),
  eliminar: (id) => citacionesRepository.delete(id)
};
