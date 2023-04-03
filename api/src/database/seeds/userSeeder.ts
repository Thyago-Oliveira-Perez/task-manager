import { User } from 'api/src/user/entities/user.entity';
import { Connection } from 'typeorm';

export default class UserSeeder {
  public static async run(connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);

    const users: User[] = [
      {
        id: 1,
        name: 'admin',
        password: 'admin',
      },
    ];

    await userRepository.insert(users);
  }
}
