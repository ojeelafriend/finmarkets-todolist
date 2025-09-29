import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { TaskStatus } from "../../../domain/Task";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  description: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  status: TaskStatus = TaskStatus.PENDING;

  @CreateDateColumn({ type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ type: "datetime" })
  updatedAt: Date;
}
