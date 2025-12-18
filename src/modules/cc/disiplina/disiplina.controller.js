
import { disiplinaService } from "./disiplina.service.js";

export const disiplinaController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await disiplinaService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await disiplinaService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await disiplinaService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await disiplinaService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await disiplinaService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
