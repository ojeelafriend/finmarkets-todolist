import { TaskRepository } from "../domain/TaskRepository";

type ReturnDeleter = {
  taskDeletedInfo: {
    id: string;
  } | null;
  error: string | null;
};
export class Deleter {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ id }: { id: string }): Promise<ReturnDeleter> {
    try {
      await this.taskRepository.deleteById({ id });
      return { taskDeletedInfo: { id }, error: null };
    } catch (error) {
      console.log("[Error DELETE TASK]: ", error);
      return { taskDeletedInfo: null, error: "Task not found" };
    }
  }
}
