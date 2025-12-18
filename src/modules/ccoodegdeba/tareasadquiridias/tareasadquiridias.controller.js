
import { tareasadquiridiasService } from "./tareasadquiridias.service.js";

export const tareasadquiridiasController = {
  listar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tareasadquiridiasService.listar() }) }
    catch (e) { next(e); }
  },
  obtener: async (req, res, next) => {
    try { res.json({ ok: true, data: await tareasadquiridiasService.obtener(req.params.id) }) }
    catch (e) { next(e); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json({ ok: true, data: await tareasadquiridiasService.crear(req.body) }) }
    catch (e) { next(e); }
  },
  actualizar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tareasadquiridiasService.actualizar(req.params.id, req.body) }) }
    catch (e) { next(e); }
  },
  eliminar: async (req, res, next) => {
    try { res.json({ ok: true, data: await tareasadquiridiasService.eliminar(req.params.id) }) }
    catch (e) { next(e); }
  }
};
