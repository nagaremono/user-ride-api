"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv-safe/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandlers_1 = require("./utils/errorHandlers");
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
//# sourceMappingURL=index.js.map