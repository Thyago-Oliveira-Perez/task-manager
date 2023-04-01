import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    LoginModule,
  ],
  controllers: [],
})
export class AppModule {}
