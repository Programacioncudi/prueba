
import { reparticionesRepository } from "./reparticiones.repository.js";

export const reparticionesService = {
  listar: () => reparticionesRepository.findAll(),
  obtener: (id) => reparticionesRepository.findById(id),
  crear: (data) => reparticionesRepository.create(data),
  actualizar: (id, data) => reparticionesRepository.update(id, data),
  eliminar: (id) => reparticionesRepository.delete(id)
};
