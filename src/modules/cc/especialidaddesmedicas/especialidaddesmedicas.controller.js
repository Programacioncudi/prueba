
import { especialidaddesmedicasService } from "./especialidaddesmedicas.service.js";

export const especialidaddesmedicasController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await especialidaddesmedicasService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await especialidaddesmedicasService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await especialidaddesmedicasService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await especialidaddesmedicasService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await especialidaddesmedicasService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
