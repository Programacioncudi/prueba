
import { Tblarchivos } from "./tblarchivos.model.js";

export const tblarchivosRepository = {
  findAll: () => Tblarchivos.findAll(),
  findById: (id) => Tblarchivos.findByPk(id),
  create: (data) => Tblarchivos.create(data),
  update: (id, data) => Tblarchivos.update(data, { where: { id } }),
  delete: (id) => Tblarchivos.destroy({ where: { id } })
};
