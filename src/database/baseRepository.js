/**
 * Archivo: src/database/baseRepository.js
 * Responsabilidad (Enterprise):
 *   - Repositorio reutilizable para modelos Sequelize.
 *   - list(): paginación + sorting + filtros + búsqueda (?q=)
 *   - getById(): lectura por PK
 *   - create(): alta (con auditoría si corresponde)
 *   - update(): actualización (con auditoría si corresponde)
 *   - remove(): soft delete si el modelo es paranoid, si no hard delete
 *
 * Nota:
 * - Este repo NO asume nombres de columnas exactos, pero si existen:
 *     created_by / updated_by
 *   los completa usando { userId } recibido por options.
 */

import { Op } from "sequelize";
import { parsePagination } from "../utils/pagination.js";
import { parseFilters } from "../utils/filters.js";

function pickAuditFields(payload, { userId } = {}) {
  if (!userId) return payload;

  const out = { ...payload };

  // Campos "típicos" enterprise
  if (out.created_by === undefined) out.created_by = userId;
  out.updated_by = userId;

  return out;
}

function buildSearchWhere(Model, q, baseWhere) {
  const where = { ...(baseWhere || {}) };
  if (!q || typeof q !== "string" || !q.trim()) return where;

  const raw = q.trim();
  const attrs = Object.keys(Model?.rawAttributes || {});
  if (!attrs.length) return where;

  // Campos de texto comunes (heurística)
  const stringFields = attrs.filter((a) =>
    /name|nombre|descripcion|desc|email|dni|cuil|cuit|telefono|tel/i.test(a)
  );

  if (!stringFields.length) return where;

  where[Op.or] = stringFields.map((f) => ({
    [f]: { [Op.like]: `%${raw}%` },
  }));

  return where;
}

export const makeBaseRepository = (Model) => ({
  /**
   * Listado con paginación + filtros.
   * query soporta:
   * - page, limit, sort, order
   * - q (búsqueda rápida)
   * - filtros escalares (parseFilters)
   */
  async list(query = {}) {
    const { page, limit, offset, sort, order } = parsePagination(query);
    const baseWhere = parseFilters(query);
    const where = buildSearchWhere(Model, query.q, baseWhere);

    const { rows, count } = await Model.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sort, order]],
    });

    return {
      meta: {
        page,
        limit,
        total: count,
        pages: Math.max(1, Math.ceil(count / limit)),
        sort,
        order,
      },
      data: rows,
    };
  },

  async getById(id) {
    return Model.findByPk(id);
  },

  async create(payload, options = {}) {
    const data = pickAuditFields(payload, options);
    return Model.create(data);
  },

  async update(id, payload, options = {}) {
    const instance = await Model.findByPk(id);
    if (!instance) return null;

    const data = pickAuditFields(payload, options);
    await instance.update(data);
    return instance;
  },

  async remove(id) {
    const instance = await Model.findByPk(id);
    if (!instance) return null;

    // Soft delete si el modelo está en paranoid mode
    if (Model.options?.paranoid) {
      await instance.destroy(); // soft
      return { deleted: true, soft: true };
    }

    await instance.destroy({ force: true });
    return { deleted: true, soft: false };
  },
});
