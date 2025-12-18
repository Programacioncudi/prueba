
import { especialidaddesmedicasRepository } from "./especialidaddesmedicas.repository.js";

export const especialidaddesmedicasService = {
  listar: () => especialidaddesmedicasRepository.findAll(),
  obtener: (id) => especialidaddesmedicasRepository.findById(id),
  crear: (data) => especialidaddesmedicasRepository.create(data),
  actualizar: (id, data) => especialidaddesmedicasRepository.update(id, data),
  eliminar: (id) => especialidaddesmedicasRepository.delete(id)
};
