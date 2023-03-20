import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTask, NewTaskReturn, TaskResponse } from './dto';
import { TasksResponse } from './dto/TaskResponse.dto';
import { Task } from './schemas/task.schemas';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(Task.name);

  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    const newTask = await this.taskModel.create(task);
    newTask.save();

    this.logger.log(newTask);

    return { message: 'new Task registered' };
  }

  async getTaskById(id: string): Promise<TaskResponse> {
    return await this.taskModel.findById({ _id: id });
  }

  async getAllTasks(): Promise<TasksResponse> {
    return { tasks: await this.taskModel.find() };
  }
}
