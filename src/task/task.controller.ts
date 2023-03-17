import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { Task } from './dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiParam({
    name: 'id',
    description: '64120729f1cdae5c6dd9a686',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'A single task based in the id passed in URL',
    type: Task,
  })
  @Get()
  async getTaskById(@Param() id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }
}
