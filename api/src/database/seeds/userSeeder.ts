import { Task } from 'api/src/task/entities/task.entity';
import { User } from 'api/src/user/entities/user.entity';
import { Connection } from 'typeorm';

export default class UserSeeder {
  public static async run(connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);
    const taskRepository = connection.getRepository(Task);

    const users: User[] = [
      {
        id: 1,
        name: 'admin',
        password: 'admin',
      },
    ];

    const tasks: Task[] = [];

    const titles = [
      'Java',
      'C#',
      'C',
      'Python',
      'Kotlin',
      'Javascript',
      'Rust',
      'HTML',
      'CSS',
      'MERIDIA{3D1Ted}',
    ];

    for (let i = 1; i <= 10; i++) {
      tasks.push({
        id: i,
        title: titles[i - 1],
        content: '',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await userRepository.insert(users);
    await taskRepository.insert(tasks);
  }
}
