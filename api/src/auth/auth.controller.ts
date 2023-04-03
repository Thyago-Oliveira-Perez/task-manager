import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './services/auth.service';
import { LogInDto, LogInResponse } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //#region Login
  @ApiOperation({ summary: 'Login into the application' })
  @ApiResponse({
    status: 200,
    description: 'API message if the loggin was successfuly',
  })
  @Post()
  async logIn(@Body() logInDto: LogInDto): Promise<LogInResponse> {
    return this.authService.signIn(logInDto.username, logInDto.password);
  }
  //#endregion
}
