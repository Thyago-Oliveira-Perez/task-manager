import { ApiProperty } from '@nestjs/swagger';
import { ITask } from '../types/ITask.type';

export class Task implements ITask {
  @ApiProperty({
    example: 'Solve two logic exercises',
    description: `The title of the task`,
  })
  title: string;

  @ApiProperty({
    example: 'At 3pm I will sit to study logic exercises in Java.',
    description: `How much the user won`,
  })
  content: string;

  @ApiProperty({
    example: '2021-11-09T13:32:53.470+00:00',
    description: `When this task was register in the database`,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2021-11-09T13:32:53.470+00:00',
    description: `When this object was updated in the database`,
  })
  updatedAt: Date;
}

export class TaskResponse {
  tasks: Task[];
}
