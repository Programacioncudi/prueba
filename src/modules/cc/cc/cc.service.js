
import { ccRepository } from "./cc.repository.js";

export const ccService = {
  listar: () => ccRepository.findAll(),
  obtener: (id) => ccRepository.findById(id),
  crear: (data) => ccRepository.create(data),
  actualizar: (id, data) => ccRepository.update(id, data),
  eliminar: (id) => ccRepository.delete(id)
};
