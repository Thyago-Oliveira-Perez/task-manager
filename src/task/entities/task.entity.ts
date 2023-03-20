import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ITask } from '../types';

@Entity()
export class Task implements ITask {
  @ObjectIdColumn() _id: string;
  @Column() title: string;
  @Column() content: string;
  @Column() createdAt: Date;
  @Column() updatedAt: Date;
}
