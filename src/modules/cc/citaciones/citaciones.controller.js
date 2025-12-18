
import { citacionesService } from "./citaciones.service.js";

export const citacionesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await citacionesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await citacionesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await citacionesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await citacionesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await citacionesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
