
import { tipodecuidadoRepository } from "./tipodecuidado.repository.js";

export const tipodecuidadoService = {
  listar: () => tipodecuidadoRepository.findAll(),
  obtener: (id) => tipodecuidadoRepository.findById(id),
  crear: (data) => tipodecuidadoRepository.create(data),
  actualizar: (id, data) => tipodecuidadoRepository.update(id, data),
  eliminar: (id) => tipodecuidadoRepository.delete(id)
};
