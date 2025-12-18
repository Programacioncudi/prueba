
import { ccoodegdebaRepository } from "./ccoodegdeba.repository.js";

export const ccoodegdebaService = {
  listar: () => ccoodegdebaRepository.findAll(),
  obtener: (id) => ccoodegdebaRepository.findById(id),
  crear: (data) => ccoodegdebaRepository.create(data),
  actualizar: (id, data) => ccoodegdebaRepository.update(id, data),
  eliminar: (id) => ccoodegdebaRepository.delete(id)
};
