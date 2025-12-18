
import { tareasadquiridiasRepository } from "./tareasadquiridias.repository.js";

export const tareasadquiridiasService = {
  listar: () => tareasadquiridiasRepository.findAll(),
  obtener: (id) => tareasadquiridiasRepository.findById(id),
  crear: (data) => tareasadquiridiasRepository.create(data),
  actualizar: (id, data) => tareasadquiridiasRepository.update(id, data),
  eliminar: (id) => tareasadquiridiasRepository.delete(id)
};
