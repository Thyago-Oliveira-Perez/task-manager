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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schemas_1 = require("./schemas/task.schemas");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
        this.logger = new common_1.Logger(task_schemas_1.Task.name);
    }
    async createTask(task) {
        try {
            const newTask = await this.taskModel.create(task);
            newTask.save();
            this.logger.log(`New task created: ${newTask.id}`);
            return { message: 'new Task registered' };
        }
        catch (e) {
            this.logger.log(e.message);
        }
    }
    async getTaskById(id) {
        try {
            return await this.taskModel.findById({ _id: id });
        }
        catch (e) {
            this.logger.log(e.message, 'Invalid taskId');
            throw e.message;
        }
    }
    async getAllTasks() {
        try {
            return { tasks: await this.taskModel.find() };
        }
        catch (e) {
            this.logger.log(e.message);
            throw e.message;
        }
    }
    async editTaskById(id, newTask) {
        const { title, content } = newTask;
        try {
            const update = await this.taskModel.updateOne({ _id: id }, { title: title, content: content });
            if (update.modifiedCount <= 0) {
                throw new common_1.HttpException('TASK_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.taskModel.findById({ _id: id });
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deletedTaskById(id) {
        try {
            await this.taskModel.deleteOne({
                _id: id,
            });
            return { message: 'Task deleted sucessfully' };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schemas_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map