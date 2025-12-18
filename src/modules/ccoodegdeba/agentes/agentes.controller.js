
import { agentesService } from "./agentes.service.js";

export const agentesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await agentesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await agentesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
