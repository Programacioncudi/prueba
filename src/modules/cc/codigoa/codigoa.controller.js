
import { codigoaService } from "./codigoa.service.js";

export const codigoaController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await codigoaService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await codigoaService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await codigoaService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await codigoaService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await codigoaService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
