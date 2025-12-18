
import { plantaRepository } from "./planta.repository.js";

export const plantaService = {
  listar: () => plantaRepository.findAll(),
  obtener: (id) => plantaRepository.findById(id),
  crear: (data) => plantaRepository.create(data),
  actualizar: (id, data) => plantaRepository.update(id, data),
  eliminar: (id) => plantaRepository.delete(id)
};
