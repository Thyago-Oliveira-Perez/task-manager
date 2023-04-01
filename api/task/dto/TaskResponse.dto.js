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
exports.TasksResponse = exports.TaskDeletedResponse = exports.TaskResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class TaskResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '64120729f1cdae5c6dd9a686',
        description: `Identifier of the task`,
    }),
    __metadata("design:type", String)
], TaskResponse.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Solve two logic exercises',
        description: `The title of the task`,
    }),
    __metadata("design:type", String)
], TaskResponse.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'At 3pm I will sit to study logic exercises in Java.',
        description: `The description of the task`,
    }),
    __metadata("design:type", String)
], TaskResponse.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-11-09T13:32:53.470+00:00',
        description: `When this task was register in the database`,
    }),
    __metadata("design:type", Date)
], TaskResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-11-09T13:32:53.470+00:00',
        description: `When this object was updated in the database`,
    }),
    __metadata("design:type", Date)
], TaskResponse.prototype, "updatedAt", void 0);
exports.TaskResponse = TaskResponse;
class TaskDeletedResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Task deleted sucessfully',
    }),
    __metadata("design:type", String)
], TaskDeletedResponse.prototype, "message", void 0);
exports.TaskDeletedResponse = TaskDeletedResponse;
class TasksResponse {
}
exports.TasksResponse = TasksResponse;
//# sourceMappingURL=TaskResponse.dto.js.map