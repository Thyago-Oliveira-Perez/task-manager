import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [TaskModule, LoginModule, DatabaseModule],
  controllers: [],
})
export class AppModule {}
