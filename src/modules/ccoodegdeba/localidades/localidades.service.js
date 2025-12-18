
import { localidadesRepository } from "./localidades.repository.js";

export const localidadesService = {
  listar: () => localidadesRepository.findAll(),
  obtener: (id) => localidadesRepository.findById(id),
  crear: (data) => localidadesRepository.create(data),
  actualizar: (id, data) => localidadesRepository.update(id, data),
  eliminar: (id) => localidadesRepository.delete(id)
};
