import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
