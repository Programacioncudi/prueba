
import { nomencladorRepository } from "./nomenclador.repository.js";

export const nomencladorService = {
  listar: () => nomencladorRepository.findAll(),
  obtener: (id) => nomencladorRepository.findById(id),
  crear: (data) => nomencladorRepository.create(data),
  actualizar: (id, data) => nomencladorRepository.update(id, data),
  eliminar: (id) => nomencladorRepository.delete(id)
};
