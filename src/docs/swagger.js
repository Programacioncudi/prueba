// src/docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { env } from "../config/env.config.js";

export function mountSwagger(app, { path = "/docs" } = {}) {
  const spec = swaggerJSDoc({
    definition: {
      openapi: "3.0.3",
      info: {
        title: env.SWAGGER_TITLE,
        version: env.SWAGGER_VERSION,
        description: env.SWAGGER_DESCRIPTION,
      },
      servers: [
        {
          url: `http://localhost:${env.PORT}`,
          description: "Development",
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
    apis: [
      "./src/modules/**/*.routes.js", // auto
      "./src/modules/**/*.controller.js",
    ],
  });

  app.use(path, swaggerUi.serve, swaggerUi.setup(spec));
}
