
import { categoriaService } from "./categoria.service.js";

export const categoriaController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await categoriaService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await categoriaService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await categoriaService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await categoriaService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await categoriaService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
