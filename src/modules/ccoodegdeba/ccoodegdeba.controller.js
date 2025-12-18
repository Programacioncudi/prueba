
import { ccoodegdebaService } from "./ccoodegdeba.service.js";

export const ccoodegdebaController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ccoodegdebaService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await ccoodegdebaService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await ccoodegdebaService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ccoodegdebaService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ccoodegdebaService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
