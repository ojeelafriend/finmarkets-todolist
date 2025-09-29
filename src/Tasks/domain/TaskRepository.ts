import { type Task } from "./Task";

export interface TaskRepository {
  save(task: Task): Promise<Task>;
  updateStatusById({ id }: { id: string }): Promise<void>;
  deleteById({ id }: { id: string }): Promise<void>;
  findAll(): Promise<Task[]>;
  findById({ id }: { id: string }): Promise<Task>;
}
