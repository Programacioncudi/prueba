
import { jefedeptosRepository } from "./jefedeptos.repository.js";

export const jefedeptosService = {
  listar: () => jefedeptosRepository.findAll(),
  obtener: (id) => jefedeptosRepository.findById(id),
  crear: (data) => jefedeptosRepository.create(data),
  actualizar: (id, data) => jefedeptosRepository.update(id, data),
  eliminar: (id) => jefedeptosRepository.delete(id)
};
