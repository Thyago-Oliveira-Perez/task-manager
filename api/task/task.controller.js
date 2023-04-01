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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const TaskResponse_dto_1 = require("./dto/TaskResponse.dto");
const task_schemas_1 = require("./schemas/task.schemas");
const task_service_1 = require("./services/task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(newTask) {
        return this.taskService.createTask(newTask);
    }
    async getTaskById(param) {
        return this.taskService.getTaskById(param.id);
    }
    async getAll() {
        return this.taskService.getAllTasks();
    }
    async editById(param, body) {
        return this.taskService.editTaskById(param.id, body);
    }
    async deleteById(param) {
        return this.taskService.deletedTaskById(param.id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create task' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Creating a task',
        type: dto_1.NewTaskReturn,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.NewTask]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Return a single task' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: '64120729f1cdae5c6dd9a686',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A single task based in the id passed in URL',
        type: dto_1.TaskResponse,
    }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Return all tasks' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A single task based in the id passed in URL',
        type: dto_1.TaskResponse,
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit task bt id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: '64120729f1cdae5c6dd9a686',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Edit a specific task based on the id param',
        type: dto_1.TaskResponse,
    }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_schemas_1.Task]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "editById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete task bt id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: '64120729f1cdae5c6dd9a686',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Inform if the operation was sucessfully',
        type: TaskResponse_dto_1.TaskDeletedResponse,
    }),
    (0, decorators_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteById", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map