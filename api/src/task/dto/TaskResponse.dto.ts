import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../entities/task.entity';

export class TaskResponse implements Task {
  @ApiProperty({
    example: '64120729f1cdae5c6dd9a686',
    description: `Identifier of the task`,
  })
  id: number;

  @ApiProperty({
    example: 'Solve two logic exercises',
    description: `The title of the task`,
  })
  title: string;

  @ApiProperty({
    example: 'At 3pm I will sit to study logic exercises in Java.',
    description: `The description of the task`,
  })
  content: string;

  @ApiProperty({
    example: '2021-11-09T13:32:53.470+00:00',
    description: `When this task was register in the database`,
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2021-11-09T13:32:53.470+00:00',
    description: `When this object was updated in the database`,
  })
  updatedAt?: Date;
}

export class TaskDeletedResponse {
  @ApiProperty({
    example: 'Task deleted sucessfully',
  })
  message: string;
}

export class TasksResponse {
  tasks: TaskResponse[];
}
