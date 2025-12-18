
import { codigoaRepository } from "./codigoa.repository.js";

export const codigoaService = {
  listar: () => codigoaRepository.findAll(),
  obtener: (id) => codigoaRepository.findById(id),
  crear: (data) => codigoaRepository.create(data),
  actualizar: (id, data) => codigoaRepository.update(id, data),
  eliminar: (id) => codigoaRepository.delete(id)
};
