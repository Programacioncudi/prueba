
import { jefaturasService } from "./jefaturas.service.js";

export const jefaturasController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefaturasService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefaturasService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await jefaturasService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefaturasService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await jefaturasService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
