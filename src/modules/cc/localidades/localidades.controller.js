
import { localidadesService } from "./localidades.service.js";

export const localidadesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await localidadesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await localidadesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await localidadesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await localidadesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await localidadesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
