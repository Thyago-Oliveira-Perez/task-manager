import { ApiProperty } from '@nestjs/swagger';

export class LogInDto {
  @ApiProperty({
    example: 'admin',
    description: `User name used to login in the application`,
  })
  username: string;

  @ApiProperty({
    example: 'admin',
    description: `Password used to validate the user session`,
  })
  password: string;
}

export class LogInResponse {
  @ApiProperty({
    example: 'admin',
    description: `Password used to validate the user session`,
  })
  access_token: string;
}
