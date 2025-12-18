
import { Codigoa } from "./codigoa.model.js";

export const codigoaRepository = {
  findAll: () => Codigoa.findAll(),
  findById: (id) => Codigoa.findByPk(id),
  create: (data) => Codigoa.create(data),
  update: (id, data) => Codigoa.update(data, { where: { id } }),
  delete: (id) => Codigoa.destroy({ where: { id } })
};
