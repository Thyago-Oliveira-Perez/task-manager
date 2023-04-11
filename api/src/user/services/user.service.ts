import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { NewUser, RegisterResponse } from '../dto';

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

  public async register(newUser: NewUser): Promise<RegisterResponse> {
    try {
      await this.userRepository.insert(newUser);
      return {
        message: 'Usuario registrado com sucesso!',
      };
    } catch (e) {}
  }
}
