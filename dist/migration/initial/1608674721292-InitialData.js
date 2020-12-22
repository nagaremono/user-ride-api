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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialData1608674721292 = void 0;
class InitialData1608674721292 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.query(`
        insert into public."user" (first_name, last_name)
        values
            ('jaka', 'tingkir'),
            ('tengku', 'umar');

        insert into public."ride" (from_city_name, to_city_name, user_id)
        values
            ('Bandung', 'Jakarta', 2);
    `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.InitialData1608674721292 = InitialData1608674721292;
//# sourceMappingURL=1608674721292-InitialData.js.map