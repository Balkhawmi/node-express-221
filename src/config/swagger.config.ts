import swaggerJSDoc from "swagger-jsdoc";


// Configuration de Swagger
const options: swaggerJSDoc.Options = {
    definition:{
        openapi: "3.0.0",
        info: {
          title: "Gestion Boutique Express API Swagger",
          version: "1.0.0",
          description:
            "Documentation de l'API pour gérer les dettes d'un Boutique.",
            license:{
                name: "MN",
            },
            contact: {
                name: "Mansour Niang",
                email: "mansouryathi@gmail.com",
              },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            },
        ],
    },
apis: ["src/routes/**.ts",".src/routes/schemas/*.ts"],
};
export const swaggerSpec = swaggerJSDoc(options);

