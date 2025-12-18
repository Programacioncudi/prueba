import { Personal } from "./personal.model.js";

/**
 * Repositorio de acceso a datos de personal.
 */
export const personalRepository = {
  findAll: () => Personal.findAll(),
  findByDni: (dni) => Personal.findByPk(dni),
  create: (data) => Personal.create(data),
  update: (dni, data) => Personal.update(data, { where: { dni } }),
  delete: (dni) => Personal.destroy({ where: { dni } })
};
