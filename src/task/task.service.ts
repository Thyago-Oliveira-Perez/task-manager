import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { NewTask, NewTaskReturn, TaskResponse } from './dto';
import { TasksResponse } from './dto/TaskResponse.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private readonly logger = new Logger();

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: MongoRepository<Task>,
  ) {}

  private tasks: TaskResponse[] = [];

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    const { title, content } = task;

    this.tasks.push({
      _id: '',
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.logger.log(task);

    return { message: 'new Task registered' };
  }

  async getTaskById(id: string): Promise<TaskResponse> {
    return this.tasks[0];
  }

  async getAllTasks(): Promise<TasksResponse> {
    return { tasks: this.tasks };
  }
}
