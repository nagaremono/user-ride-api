"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Ride = class Ride extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ride.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Ride.prototype, "from_city_name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Ride.prototype, "to_city_name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.rides),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", User_1.User)
], Ride.prototype, "user_id", void 0);
Ride = __decorate([
    typeorm_1.Entity()
], Ride);
exports.Ride = Ride;
//# sourceMappingURL=Ride.js.map