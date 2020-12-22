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
exports.userController = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../entities/User");
const typeorm_1 = require("typeorm");
const router = express_1.default.Router();
exports.userController = router;
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { relation } = req.query;
    try {
        const query = typeorm_1.getRepository(User_1.User).createQueryBuilder('user');
        if (relation === 'ride') {
            query.leftJoinAndSelect('user.rides', 'ride').orderBy('user.id');
        }
        const users = yield query.getMany();
        return res.json(users);
    }
    catch (error) {
        return next(error);
    }
}));
//# sourceMappingURL=user.js.map