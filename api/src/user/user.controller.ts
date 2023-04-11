import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './services/user.service';
import { RegisterResponse, NewUser } from './dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public async register(@Body() newUser: NewUser): Promise<RegisterResponse> {
    return await this.userService.register(newUser);
  }
}
