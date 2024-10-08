"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importer le middleware CORS
const article_route_1 = __importDefault(require("./routes/article.route"));
const client_route_1 = __importDefault(require("./routes/client.route"));
const dette_route_1 = __importDefault(require("./routes/dette.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const paiement_route_1 = __importDefault(require("./routes/paiement.route"));
const prisma_config_1 = __importDefault(require("./config/prisma.config"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = require("./config/swagger.config");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.prisma = prisma_config_1.default;
    }
    // Middleware pour le traitement des requêtes JSON
    middleware() {
        this.server.use((0, cors_1.default)({
            origin: ['http://localhost:4000', 'http://localhost:5173'], // Permet seulement cette origine
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
        this.server.use(express_1.default.json());
        this.server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.swaggerSpec));
    }
    // Définition des routes
    routes() {
        this.server.use("/api/v1/articles", article_route_1.default);
        this.server.use("/api/v1/clients", client_route_1.default);
        this.server.use("/api/v1/dettes", dette_route_1.default);
        this.server.use('/api/v1/auth', auth_route_1.default);
        this.server.use('/api/v1/dettes', paiement_route_1.default);
        this.server.use('/api/v1/users', user_route_1.default);
    }
}
const app = new App();
exports.default = app;
