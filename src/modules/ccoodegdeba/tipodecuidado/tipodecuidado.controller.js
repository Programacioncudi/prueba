
import { tipodecuidadoService } from "./tipodecuidado.service.js";

export const tipodecuidadoController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipodecuidadoService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipodecuidadoService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await tipodecuidadoService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipodecuidadoService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipodecuidadoService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
