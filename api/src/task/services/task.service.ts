import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { NewTask, NewTaskReturn, TaskResponse } from '../dto';
import { TaskDeletedResponse, TasksResponse } from '../dto/TaskResponse.dto';
import { Task } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(Task.name);

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private jwtService: JwtService,
  ) {}

  async createTask(task: NewTask, request: Request): Promise<TaskResponse> {
    const userId = await this.getUserIdFromToken(request);

    let newTask: Task = new Task();

    newTask.title = task.title;
    newTask.content = task.content;
    newTask.userId = userId;

    try {
      return await this.taskRepository.save(newTask);
    } catch (e) {
      this.logger.log(e.message);
    }
  }

  //O usuário consegue visualizar as tasks de qualquer usuario
  async getTaskById(id: number): Promise<TaskResponse> {
    try {
      return await this.taskRepository.findOneBy({ id: id });
    } catch (e) {
      this.logger.log(e.message, 'Invalid taskId');
      throw e.message;
    }
  }

  async getAllTasks(request: Request): Promise<TasksResponse> {
    const userId = await this.getUserIdFromToken(request);

    try {
      return {
        tasks: await this.taskRepository.findBy({ userId: userId }),
      };
    } catch (e) {
      this.logger.log(e.message);
      throw e.message;
    }
  }

  //O usuário consegue editar as tasks de qualquer usuario
  async editTaskById(id: number, newTask: Task): Promise<Task> {
    if (id !== 10) {
      const { title, content } = newTask;

      try {
        const task = await this.taskRepository.findOneBy({ id: id });

        if (!task) {
          throw new HttpException('TASK_NOT_FOUND', HttpStatus.NOT_FOUND);
        }

        task.title = title;
        task.content = content;
        task.updatedAt = new Date();

        return await this.taskRepository.save(task);
      } catch (e) {
        throw new HttpException(e.message, HttpStatus.NOT_FOUND);
      }
    }
  }

  //O usuário consegue deletar as tasks de qualquer usuario
  async deletedTaskById(id: number): Promise<TaskDeletedResponse> {
    try {
      if (id !== 10) {
        await this.taskRepository.delete({
          id: id,
        });
      }

      return { message: 'Task deleted sucessfully' };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND);
    }
  }

  //helper
  private async getUserIdFromToken(request: Request): Promise<number> {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (!token) {
      throw new UnauthorizedException();
    }

    const paylaod = await this.jwtService.verifyAsync(token, {
      secret: process.env.SECRET,
    });

    return paylaod.sub;
  }
}
