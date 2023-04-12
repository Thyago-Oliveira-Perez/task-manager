import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './services/user.service';
import { RegisterResponse, NewUser, VulnUsers } from './dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public async register(@Body() newUser: NewUser): Promise<RegisterResponse> {
    return await this.userService.register(newUser);
  }

  @Get('getUsers')
  public async getAllUsers(): Promise<VulnUsers> {
    return await this.userService.getAllUsers();
  }
}
