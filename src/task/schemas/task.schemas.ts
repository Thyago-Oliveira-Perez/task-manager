import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITask } from '../types';

@Schema({ _id: true, timestamps: true })
export class Task implements ITask {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  createdAt: Date;
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
