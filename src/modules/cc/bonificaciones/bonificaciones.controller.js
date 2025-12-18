
import { bonificacionesService } from "./bonificaciones.service.js";

export const bonificacionesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await bonificacionesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await bonificacionesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await bonificacionesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await bonificacionesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await bonificacionesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
