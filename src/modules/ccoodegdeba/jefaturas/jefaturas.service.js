
import { jefaturasRepository } from "./jefaturas.repository.js";

export const jefaturasService = {
  listar: () => jefaturasRepository.findAll(),
  obtener: (id) => jefaturasRepository.findById(id),
  crear: (data) => jefaturasRepository.create(data),
  actualizar: (id, data) => jefaturasRepository.update(id, data),
  eliminar: (id) => jefaturasRepository.delete(id)
};
