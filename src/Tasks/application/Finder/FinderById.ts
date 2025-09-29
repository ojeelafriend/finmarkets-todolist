import { Task } from "../../domain/Task";
import { TaskRepository } from "../../domain/TaskRepository";

type ReturnFinderById = {
  task: Task | null;
  error: string | null;
};

export class FinderById {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ id }: { id: string }): Promise<ReturnFinderById> {
    try {
      const task = await this.taskRepository.findById({ id });
      return { task, error: null };
    } catch (error) {
      console.log("[Error FIND BY ID TASK]: ", error);
      return { task: null, error: "Task not found" };
    }
  }
}
