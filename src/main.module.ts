import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [TaskModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
})
export class AppModule {}
