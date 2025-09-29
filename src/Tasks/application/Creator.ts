import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";
import { TaskStatus } from "../domain/Task";

export class Creator {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): Promise<{ task: Task | null; error: string | null }> {
    try {
      const task = {
        title,
        description,
        status: TaskStatus.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const taskSaved = await this.taskRepository.save(task);

      return { task: taskSaved, error: null };
    } catch (error) {
      return { task: null, error: "Error creating task" };
    }
  }
}
