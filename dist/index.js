"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv-safe/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandlers_1 = require("./utils/errorHandlers");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [User_1.User],
        logging: true,
        synchronize: true,
    });
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.get('/', (_, res) => {
        return res.json({ message: 'hello world' });
    });
    app.use(errorHandlers_1.notFoundHandler);
    app.use(errorHandlers_1.lastErrorHandler);
    const server = app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGUSR2', gracefulShutdown);
    function gracefulShutdown() {
        server.close(() => {
            console.log('server process terminated');
            process.exit(0);
        });
    }
});
main().catch((error) => console.error(error));
//# sourceMappingURL=index.js.map