import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'api/src/user/services/user.service';

@Injectable()
export class AuthService {
  private logger = new Logger();

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  //caso passe
  public async signIn(username: string, password: string) {
    const user = await this.userService.findByName(username);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { username: username, sub: user.id };

    this.logger.log('User logged successfuly');
    return {
      acess_token: await this.jwtService.signAsync(payload, {
        secret:
          'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
      }),
    };
  }
}
