
import { funcionesRepository } from "./funciones.repository.js";

export const funcionesService = {
  listar: () => funcionesRepository.findAll(),
  obtener: (id) => funcionesRepository.findById(id),
  crear: (data) => funcionesRepository.create(data),
  actualizar: (id, data) => funcionesRepository.update(id, data),
  eliminar: (id) => funcionesRepository.delete(id)
};
