
import { agentesRepository } from "./agentes.repository.js";

export const agentesService = {
  listar: () => agentesRepository.findAll(),
  obtener: (id) => agentesRepository.findById(id),
  crear: (data) => agentesRepository.create(data),
  actualizar: (id, data) => agentesRepository.update(id, data),
  eliminar: (id) => agentesRepository.delete(id)
};
