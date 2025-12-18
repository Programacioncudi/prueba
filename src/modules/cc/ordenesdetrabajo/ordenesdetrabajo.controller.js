
import { ordenesdetrabajoService } from "./ordenesdetrabajo.service.js";

export const ordenesdetrabajoController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ordenesdetrabajoService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await ordenesdetrabajoService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await ordenesdetrabajoService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ordenesdetrabajoService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await ordenesdetrabajoService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
