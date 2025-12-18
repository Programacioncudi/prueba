
import { agentes_serviciosRepository } from "./agentes_servicios.repository.js";

export const agentes_serviciosService = {
  listar: () => agentes_serviciosRepository.findAll(),
  obtener: (id) => agentes_serviciosRepository.findById(id),
  crear: (data) => agentes_serviciosRepository.create(data),
  actualizar: (id, data) => agentes_serviciosRepository.update(id, data),
  eliminar: (id) => agentes_serviciosRepository.delete(id)
};
