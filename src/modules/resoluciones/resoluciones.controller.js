/**
 * Archivo: src/modules/resoluciones/resoluciones.controller.js
 * Responsabilidad:
 *   - HTTP layer (Express) enterprise para resoluciones.
 */
import service from "./resoluciones.service.js";
import { createResolucionesSchema, updateResolucionesSchema } from "./resoluciones.schema.js";
import { getRequestContext } from "../../middleware/requestContext.middleware.js";

const sanitize = (entity) => entity;

export const listResoluciones = async (req, res) => {
  try {
    const result = await service.list(req.query);
    return res.json({ ok: true, meta: result.meta, data: result.data.map(sanitize) });
  } catch (_err) {
    return res.status(500).json({ ok: false, error: "Error listando registros" });
  }
};

export const getResolucionesById = async (req, res) => {
  try {
    const entity = await service.getById(req.params.id);
    if (!entity) return res.status(404).json({ ok: false, error: "No encontrado" });
    return res.json({ ok: true, data: sanitize(entity) });
  } catch (_err) {
    return res.status(500).json({ ok: false, error: "Error obteniendo registro" });
  }
};

export const createResoluciones = async (req, res) => {
  try {
    const { error, value } = createResolucionesSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ ok: false, error: "Datos inválidos", details: error.details.map((d) => d.message) });
    }

    const ctx = getRequestContext();
    const entity = await service.create(value, { userId: ctx.userId });
    return res.status(201).json({ ok: true, data: sanitize(entity) });
  } catch (_err) {
    return res.status(500).json({ ok: false, error: "Error creando registro" });
  }
};

export const updateResoluciones = async (req, res) => {
  try {
    const { error, value } = updateResolucionesSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ ok: false, error: "Datos inválidos", details: error.details.map((d) => d.message) });
    }

    const ctx = getRequestContext();
    const entity = await service.update(req.params.id, value, { userId: ctx.userId });
    if (!entity) return res.status(404).json({ ok: false, error: "No encontrado" });
    return res.json({ ok: true, data: sanitize(entity) });
  } catch (_err) {
    return res.status(500).json({ ok: false, error: "Error actualizando registro" });
  }
};

export const deleteResoluciones = async (req, res) => {
  try {
    const ctx = getRequestContext();
    const ok = await service.remove(req.params.id, { userId: ctx.userId });
    if (!ok) return res.status(404).json({ ok: false, error: "No encontrado" });
    return res.status(204).send();
  } catch (_err) {
    return res.status(500).json({ ok: false, error: "Error eliminando registro" });
  }
};
