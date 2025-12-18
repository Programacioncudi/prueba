
import { ordenesdetrabajoRepository } from "./ordenesdetrabajo.repository.js";

export const ordenesdetrabajoService = {
  listar: () => ordenesdetrabajoRepository.findAll(),
  obtener: (id) => ordenesdetrabajoRepository.findById(id),
  crear: (data) => ordenesdetrabajoRepository.create(data),
  actualizar: (id, data) => ordenesdetrabajoRepository.update(id, data),
  eliminar: (id) => ordenesdetrabajoRepository.delete(id)
};
