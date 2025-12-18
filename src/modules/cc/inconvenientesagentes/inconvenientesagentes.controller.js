
import { inconvenientesagentesService } from "./inconvenientesagentes.service.js";

export const inconvenientesagentesController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await inconvenientesagentesService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await inconvenientesagentesService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await inconvenientesagentesService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await inconvenientesagentesService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await inconvenientesagentesService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
