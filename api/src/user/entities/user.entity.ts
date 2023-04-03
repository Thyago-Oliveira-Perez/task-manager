import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: false })
  name: string;

  @Column({ type: String, nullable: false })
  password: string;

  @CreateDateColumn({ type: Date, nullable: true })
  createdAt?: Date;

  @CreateDateColumn({ type: Date, nullable: true })
  updatedAt?: Date;
}
