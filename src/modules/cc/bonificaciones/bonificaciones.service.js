
import { bonificacionesRepository } from "./bonificaciones.repository.js";

export const bonificacionesService = {
  listar: () => bonificacionesRepository.findAll(),
  obtener: (id) => bonificacionesRepository.findById(id),
  crear: (data) => bonificacionesRepository.create(data),
  actualizar: (id, data) => bonificacionesRepository.update(id, data),
  eliminar: (id) => bonificacionesRepository.delete(id)
};
