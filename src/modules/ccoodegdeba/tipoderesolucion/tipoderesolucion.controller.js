
import { tipoderesolucionService } from "./tipoderesolucion.service.js";

export const tipoderesolucionController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipoderesolucionService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipoderesolucionService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await tipoderesolucionService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipoderesolucionService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tipoderesolucionService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
