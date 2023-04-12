import { User } from '../entities/user.entity';

export class RegisterResponse {
  message: string;
}

export class NewUser {
  name: string;
  password: string;
}

export class VulnUsers {
  key: string;
  users: User[];
}
