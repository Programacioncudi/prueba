/**
 * Archivo: src/middleware/validation.middleware.js
 * Responsabilidad:
 *   - Ejecutar esquemas Joi sobre req.body.
 */

export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        error: error.details[0].message
      });
    }

    next();
  };
};
