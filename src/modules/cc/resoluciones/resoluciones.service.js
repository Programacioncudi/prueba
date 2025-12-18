
import { resolucionesRepository } from "./resoluciones.repository.js";

export const resolucionesService = {
  listar: () => resolucionesRepository.findAll(),
  obtener: (id) => resolucionesRepository.findById(id),
  crear: (data) => resolucionesRepository.create(data),
  actualizar: (id, data) => resolucionesRepository.update(id, data),
  eliminar: (id) => resolucionesRepository.delete(id)
};
