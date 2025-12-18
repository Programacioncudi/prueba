
import { regimenhorarioRepository } from "./regimenhorario.repository.js";

export const regimenhorarioService = {
  listar: () => regimenhorarioRepository.findAll(),
  obtener: (id) => regimenhorarioRepository.findById(id),
  crear: (data) => regimenhorarioRepository.create(data),
  actualizar: (id, data) => regimenhorarioRepository.update(id, data),
  eliminar: (id) => regimenhorarioRepository.delete(id)
};
