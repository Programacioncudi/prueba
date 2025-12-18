
import { reparticionesService } from "./reparticiones.service.js";

export const reparticionesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await reparticionesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await reparticionesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await reparticionesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await reparticionesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await reparticionesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
