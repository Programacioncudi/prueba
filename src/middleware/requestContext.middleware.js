/**
 * Archivo: src/middleware/requestContext.middleware.js
 * Responsabilidad:
 *   - Crear contexto por-request (requestId + userId) usando AsyncLocalStorage.
 *   - Permite auditoría consistente sin pasar params por toda la app.
 */

import { AsyncLocalStorage } from "async_hooks";
import crypto from "crypto";

export const requestContext = new AsyncLocalStorage();

export const requestContextMiddleware = (req, _res, next) => {
  const requestId = req.headers["x-request-id"] || crypto.randomUUID();
  const userId = req.user?.id ?? null;

  requestContext.run({ requestId, userId }, () => next());
};

export const getRequestContext = () =>
  requestContext.getStore() ?? { requestId: null, userId: null };
