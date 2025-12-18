// src/modules/rbac/rbac.schema.js
import Joi from "joi";

/**
 * ============================
 * RBAC ENTERPRISE SCHEMAS
 * ============================
 */

const id = Joi.number().integer().positive();

const auditFields = {
  created_by: id.optional(),
  updated_by: id.optional(),
  deleted_at: Joi.date().allow(null),
};

/* ============================
 * ROLES
 * ============================ */

export const createRoleSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).required(),
  descripcion: Joi.string().max(255).allow(null),
  activo: Joi.boolean().default(true),
  ...auditFields,
});

export const updateRoleSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).optional(),
  descripcion: Joi.string().max(255).allow(null),
  activo: Joi.boolean().optional(),
  ...auditFields,
});

/* ============================
 * PERMISOS
 * ============================ */

export const createPermissionSchema = Joi.object({
  codigo: Joi.string()
    .pattern(/^[A-Z_]+$/)
    .max(100)
    .required(),
  descripcion: Joi.string().max(255).allow(null),
  modulo: Joi.string().max(100).required(),
  activo: Joi.boolean().default(true),
  ...auditFields,
});

export const updatePermissionSchema = Joi.object({
  codigo: Joi.string()
    .pattern(/^[A-Z_]+$/)
    .max(100)
    .optional(),
  descripcion: Joi.string().max(255).allow(null),
  modulo: Joi.string().max(100).optional(),
  activo: Joi.boolean().optional(),
  ...auditFields,
});

/* ============================
 * DOMINIOS
 * ============================ */

export const createDomainSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).required(),
  descripcion: Joi.string().max(255).allow(null),
  activo: Joi.boolean().default(true),
  ...auditFields,
});

export const updateDomainSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).optional(),
  descripcion: Joi.string().max(255).allow(null),
  activo: Joi.boolean().optional(),
  ...auditFields,
});

/* ============================
 * ASIGNACIONES
 * ============================ */

export const assignPermissionToRoleSchema = Joi.object({
  rol_id: id.required(),
  permiso_id: id.required(),
  dominio_id: id.optional().allow(null),
  ...auditFields,
});

export const assignRoleToUserSchema = Joi.object({
  usuario_id: id.required(),
  rol_id: id.required(),
  dominio_id: id.optional().allow(null),
  fecha_desde: Joi.date().optional(),
  fecha_hasta: Joi.date().optional().allow(null),
  ...auditFields,
});

/* ============================
 * REVOCACIONES
 * ============================ */

export const revokeRoleSchema = Joi.object({
  usuario_id: id.required(),
  rol_id: id.required(),
  dominio_id: id.optional().allow(null),
  motivo: Joi.string().max(255).optional(),
  ...auditFields,
});

/* ============================
 * QUERIES
 * ============================ */

export const rbacQuerySchema = Joi.object({
  usuario_id: id.optional(),
  rol_id: id.optional(),
  permiso_id: id.optional(),
  dominio_id: id.optional(),
  activo: Joi.boolean().optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
});

/* ============================
 * EXPORTS COMPATIBLES
 * ============================ */

export const createRbacSchema = Joi.alternatives().try(
  createRoleSchema,
  createPermissionSchema,
  assignPermissionToRoleSchema,
  assignRoleToUserSchema
);

export const updateRbacSchema = Joi.alternatives().try(
  updateRoleSchema,
  updatePermissionSchema,
  revokeRoleSchema
);
