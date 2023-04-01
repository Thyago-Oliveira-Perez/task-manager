import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  //#region Create a Task
  @ApiOperation({ summary: 'Login into the application' })
  @ApiResponse({
    status: 200,
    description: 'API message if the loggin was successfuly',
  })
  @Post()
  async createTask(): Promise<any> {
    return { logged: true };
  }
  //#endregion
}
