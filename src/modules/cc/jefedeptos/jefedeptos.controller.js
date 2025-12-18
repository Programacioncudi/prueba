
import { jefedeptosService } from "./jefedeptos.service.js";

export const jefedeptosController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefedeptosService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefedeptosService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await jefedeptosService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefedeptosService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefedeptosService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
