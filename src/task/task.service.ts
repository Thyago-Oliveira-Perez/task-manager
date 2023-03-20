import { Injectable, Logger } from '@nestjs/common';
import { NewTask, NewTaskReturn, Task } from './dto';

@Injectable()
export class TaskService {
  private readonly logger = new Logger();

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    this.logger.log(task);
    return { message: 'new Task registered' };
  }

  async getTaskById(id: string): Promise<Task> {
    const task: Task = {
      title: 'ORM',
      content: 'Introduzir ORM e banco de dados',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return task;
  }
}
