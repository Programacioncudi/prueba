
import { inconvenientesagentesRepository } from "./inconvenientesagentes.repository.js";

export const inconvenientesagentesService = {
  listar: () => inconvenientesagentesRepository.findAll(),
  obtener: (id) => inconvenientesagentesRepository.findById(id),
  crear: (data) => inconvenientesagentesRepository.create(data),
  actualizar: (id, data) => inconvenientesagentesRepository.update(id, data),
  eliminar: (id) => inconvenientesagentesRepository.delete(id)
};
