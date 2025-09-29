import { TaskStatus } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

type ReturnUpdater = {
  taskUpdatedInfo: {
    id: string;
    status: TaskStatus;
  } | null;
  error: string | null;
};

export class Updater {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ id }: { id: string }): Promise<ReturnUpdater> {
    try {
      const task = await this.taskRepository.updateStatusById({ id });
      return { taskUpdatedInfo: task, error: null };
    } catch (error) {
      console.log("[Error UPDATE TASK]: ", error);
      return { taskUpdatedInfo: null, error: "Task not found" };
    }
  }
}
