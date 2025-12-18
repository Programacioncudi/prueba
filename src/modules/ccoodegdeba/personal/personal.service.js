import { personalRepository } from "./personal.repository.js";

/**
 * Lógica de negocio del módulo personal.
 */
export const personalService = {
  listar: () => personalRepository.findAll(),

  obtenerPorDni: (dni) => personalRepository.findByDni(dni),

  crear: async (data) => {
    const existe = await personalRepository.findByDni(data.dni);
    if (existe) throw new Error("Ya existe un registro con ese DNI.");
    return personalRepository.create(data);
  },

  actualizar: (dni, data) => personalRepository.update(dni, data),

  eliminar: (dni) => personalRepository.delete(dni)
};
