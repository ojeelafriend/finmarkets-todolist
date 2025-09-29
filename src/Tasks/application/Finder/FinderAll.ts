import { TaskRepository } from "../../domain/TaskRepository";
import { Task } from "../../domain/Task";

type ReturnFinderAll = {
  tasks: Task[] | null;
  error: string | null;
};

export class FinderAll {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(): Promise<ReturnFinderAll> {
    try {
      const tasks = await this.taskRepository.findAll();
      return { tasks, error: null };
    } catch (error) {
      console.log("[Error FIND ALL TASKS]: ", error);
      return { tasks: [], error: null };
    }
  }
}
