
import { pedidosService } from "./pedidos.service.js";

export const pedidosController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await pedidosService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await pedidosService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await pedidosService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await pedidosService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await pedidosService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
