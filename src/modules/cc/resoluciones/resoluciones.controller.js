
import { resolucionesService } from "./resoluciones.service.js";

export const resolucionesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await resolucionesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await resolucionesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await resolucionesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await resolucionesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await resolucionesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
