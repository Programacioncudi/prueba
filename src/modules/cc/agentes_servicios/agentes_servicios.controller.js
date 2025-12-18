
import { agentes_serviciosService } from "./agentes_servicios.service.js";

export const agentes_serviciosController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentes_serviciosService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentes_serviciosService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await agentes_serviciosService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentes_serviciosService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentes_serviciosService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
