import { ITask } from '../types';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task implements ITask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: false })
  title: string;

  @Column({ type: String, nullable: false })
  content: string;

  @CreateDateColumn({ type: Date, nullable: true })
  createdAt?: Date;

  @CreateDateColumn({ type: Date, nullable: true })
  updatedAt?: Date;
}
