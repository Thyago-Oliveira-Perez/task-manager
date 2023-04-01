import { ApiProperty } from '@nestjs/swagger';

export class NewTask {
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
}

export class NewTaskReturn {
  @ApiProperty({
    example: 'Task created successfully',
    description: `Message to inform about your register`,
  })
  message: string;
}
