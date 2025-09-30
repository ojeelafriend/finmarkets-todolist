import { TaskStatus, Task } from "../Tasks/domain/Task";
import { TaskRepository } from "../Tasks/domain/TaskRepository";

import { allTask, task as taskMooc, taskUpdated } from "./Task";

export class MoocTaskRepository implements TaskRepository {
  constructor() {}

  async updateStatusById({
    id,
  }: {
    id: string;
  }): Promise<{ id: string; status: TaskStatus }> {
    if (id !== taskUpdated.id) {
      throw new Error("Task not found");
    }

    return { id: taskUpdated.id!, status: taskUpdated.status };
  }

  async deleteById({ id }: { id: string }): Promise<void> {
    if (id !== taskUpdated.id) {
      throw new Error("Task not found");
    }
  }

  async findAll(): Promise<Task[]> {
    return allTask;
  }

  async findById({ id }: { id: string }): Promise<Task> {
    if (id !== taskMooc.id) {
      throw new Error("Task not found");
    }

    return taskMooc;
  }

  async save(task: Task): Promise<Task> {
    return taskMooc;
  }
}
