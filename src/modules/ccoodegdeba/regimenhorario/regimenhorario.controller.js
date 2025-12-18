
import { regimenhorarioService } from "./regimenhorario.service.js";

export const regimenhorarioController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await regimenhorarioService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await regimenhorarioService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await regimenhorarioService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await regimenhorarioService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await regimenhorarioService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
