
import { disiplinaRepository } from "./disiplina.repository.js";

export const disiplinaService = {
  listar: () => disiplinaRepository.findAll(),
  obtener: (id) => disiplinaRepository.findById(id),
  crear: (data) => disiplinaRepository.create(data),
  actualizar: (id, data) => disiplinaRepository.update(id, data),
  eliminar: (id) => disiplinaRepository.delete(id)
};
