import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { NewTask, NewTaskReturn, TaskResponse } from '../dto';
import { TaskDeletedResponse, TasksResponse } from '../dto/TaskResponse.dto';
import { Task } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(Task.name);

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(task: NewTask): Promise<NewTaskReturn> {
    try {
      await this.taskRepository.save(task);
      return { message: 'new Task registered' };
    } catch (e) {
      this.logger.log(e.message);
    }
  }

  async getTaskById(id: number): Promise<TaskResponse> {
    try {
      return await this.taskRepository.findOneBy({ id: id });
    } catch (e) {
      this.logger.log(e.message, 'Invalid taskId');
      throw e.message;
    }
  }

  async getAllTasks(): Promise<TasksResponse> {
    try {
      return { tasks: await this.taskRepository.find() };
    } catch (e) {
      this.logger.log(e.message);
      throw e.message;
    }
  }

  //O usuário consegue editar as tasks de qualquer usuario
  async editTaskById(id: number, newTask: Task): Promise<Task> {
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

  async deletedTaskById(id: number): Promise<TaskDeletedResponse> {
    try {
      await this.taskRepository.delete({
        id: id,
      });

      return { message: 'Task deleted sucessfully' };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND);
    }
  }
}
