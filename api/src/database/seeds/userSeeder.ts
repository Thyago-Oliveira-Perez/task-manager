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
      {
        id: 4,
        name: 'carlos',
        password: '05923_87423',
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
        userId: titles[i - 1] === 'MERIDIA{3D1Ted}' ? 4 : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    if ((await userRepository.find()).length === 0) {
      await userRepository.insert(users);
    }
    if ((await taskRepository.find()).length === 0) {
      await taskRepository.insert(tasks);
    }
  }
}
