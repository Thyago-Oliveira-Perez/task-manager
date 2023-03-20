import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { NewTask, NewTaskReturn, TaskResponse } from './dto';
import { TasksResponse } from './dto/TaskResponse.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  //#region: Create a Task
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 200,
    description: 'Creating a task',
    type: NewTaskReturn,
  })
  @Post()
  async createTask(@Body() newTask: NewTask): Promise<NewTaskReturn> {
    return this.taskService.createTask(newTask);
  }
  //#endregion

  //#region: Get a task by id
  @ApiOperation({ summary: 'Return a single task' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: '64120729f1cdae5c6dd9a686',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'A single task based in the id passed in URL',
    type: TaskResponse,
  })
  @Get('/:id')
  async getTaskById(@Param() param): Promise<TaskResponse> {
    return this.taskService.getTaskById(param.id);
  }
  //#endregion

  //#region: Get a task by id
  @ApiOperation({ summary: 'Return all tasks' })
  @ApiResponse({
    status: 200,
    description: 'A single task based in the id passed in URL',
    type: TaskResponse,
  })
  @Get()
  async getAll(): Promise<TasksResponse> {
    return this.taskService.getAllTasks();
  }
  //#endregion
}
