"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.lastErrorHandler = void 0;
const lastErrorHandler = (error, _, res, next) => {
    res.status(500).send({ error: 'internal server error' });
    next(error);
};
exports.lastErrorHandler = lastErrorHandler;
const notFoundHandler = (_, res) => {
    return res.status(404).json({ error: 'unknown endpoint' });
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=errorHandlers.js.map