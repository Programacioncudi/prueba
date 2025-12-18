
import { tblarchivosService } from "./tblarchivos.service.js";

export const tblarchivosController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tblarchivosService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await tblarchivosService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await tblarchivosService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tblarchivosService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tblarchivosService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
