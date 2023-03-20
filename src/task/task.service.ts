import { Injectable, Logger } from '@nestjs/common';
import { NewTask, NewTaskReturn, Task, TaskResponse } from './dto';

@Injectable()
export class TaskService {
  private readonly logger = new Logger();

  private tasks: Task[] = [];

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    const { title, content } = task;

    this.tasks.push({
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.logger.log(task);

    return { message: 'new Task registered' };
  }

  async getTaskById(id: string): Promise<Task> {
    return this.tasks[0];
  }

  async getAllTasks(): Promise<TaskResponse> {
    return { tasks: this.tasks };
  }
}
