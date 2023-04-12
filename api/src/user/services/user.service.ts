import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { NewUser, RegisterResponse, VulnUsers } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findByName(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { name: username },
    });
  }

  public async getAllUsers(): Promise<VulnUsers> {
    try {
      const users = await this.userRepository.find();
      return {
        key: 'MERIDIA{uZ3RsS}',
        users,
      };
    } catch (e) {}
  }

  public async register(newUser: NewUser): Promise<RegisterResponse> {
    try {
      await this.userRepository.insert(newUser);
      return {
        message: 'Usuario registrado com sucesso!',
      };
    } catch (e) {}
  }
}
