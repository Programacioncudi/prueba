
import { tipoderesolucionRepository } from "./tipoderesolucion.repository.js";

export const tipoderesolucionService = {
  listar: () => tipoderesolucionRepository.findAll(),
  obtener: (id) => tipoderesolucionRepository.findById(id),
  crear: (data) => tipoderesolucionRepository.create(data),
  actualizar: (id, data) => tipoderesolucionRepository.update(id, data),
  eliminar: (id) => tipoderesolucionRepository.delete(id)
};
