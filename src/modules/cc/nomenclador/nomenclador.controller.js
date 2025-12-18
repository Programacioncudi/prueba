
import { nomencladorService } from "./nomenclador.service.js";

export const nomencladorController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await nomencladorService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await nomencladorService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await nomencladorService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await nomencladorService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await nomencladorService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
