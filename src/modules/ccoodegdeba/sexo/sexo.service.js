
import { sexoRepository } from "./sexo.repository.js";

export const sexoService = {
  listar: () => sexoRepository.findAll(),
  obtener: (id) => sexoRepository.findById(id),
  crear: (data) => sexoRepository.create(data),
  actualizar: (id, data) => sexoRepository.update(id, data),
  eliminar: (id) => sexoRepository.delete(id)
};
