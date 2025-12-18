import { personalService } from "./personal.service.js";
import { createPersonalSchema, updatePersonalSchema } from "./personal.schema.js";

/**
 * Controlador HTTP del módulo personal.
 */
export const personalController = {
  listar: async (req, res, next) => {
    try {
      const data = await personalService.listar();
      res.json({ ok: true, data });
    } catch (err) {
      next(err);
    }
  },

  obtener: async (req, res, next) => {
    try {
      const data = await personalService.obtenerPorDni(req.params.dni);
      res.json({ ok: true, data });
    } catch (err) {
      next(err);
    }
  },

  crear: async (req, res, next) => {
    try {
      const { error, value } = createPersonalSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await personalService.crear(value);
      res.status(201).json({ ok: true, data });
    } catch (err) {
      next(err);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const { error, value } = updatePersonalSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      await personalService.actualizar(req.params.dni, value);
      res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await personalService.eliminar(req.params.dni);
      res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  }
};
