
import { tblarchivosRepository } from "./tblarchivos.repository.js";

export const tblarchivosService = {
  listar: () => tblarchivosRepository.findAll(),
  obtener: (id) => tblarchivosRepository.findById(id),
  crear: (data) => tblarchivosRepository.create(data),
  actualizar: (id, data) => tblarchivosRepository.update(id, data),
  eliminar: (id) => tblarchivosRepository.delete(id)
};
