import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTask, NewTaskReturn, TaskResponse } from '../dto';
import { TaskDeletedResponse, TasksResponse } from '../dto/TaskResponse.dto';
import { Task } from '../schemas/task.schemas';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(Task.name);

  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    try {
      const newTask = await this.taskModel.create(task);
      newTask.save();

      this.logger.log(`New task created: ${newTask.id}`);

      return { message: 'new Task registered' };
    } catch (e) {
      this.logger.log(e.message);
    }
  }

  async getTaskById(id: string): Promise<TaskResponse> {
    try {
      return await this.taskModel.findById({ _id: id });
    } catch (e) {
      this.logger.log(e.message, 'Invalid taskId');
      throw e.message;
    }
  }

  async getAllTasks(): Promise<TasksResponse> {
    try {
      return { tasks: await this.taskModel.find() };
    } catch (e) {
      this.logger.log(e.message);
      throw e.message;
    }
  }

  async editTaskById(id: string, newTask: Task): Promise<Task> {
    const { title, content } = newTask;

    try {
      const update = await this.taskModel.updateOne(
        { _id: id },
        { title: title, content: content },
      );

      if (update.modifiedCount <= 0) {
        throw new HttpException('TASK_NOT_FOUND', HttpStatus.NOT_FOUND);
      }

      return await this.taskModel.findById({ _id: id });
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND);
    }
  }

  async deletedTaskById(id: string): Promise<TaskDeletedResponse> {
    try {
      await this.taskModel.deleteOne({
        _id: id,
      });

      return { message: 'Task deleted sucessfully' };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND);
    }
  }
}
