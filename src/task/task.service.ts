import { Injectable } from '@nestjs/common';
import { Task } from './dto';

@Injectable()
export class TaskService {
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
