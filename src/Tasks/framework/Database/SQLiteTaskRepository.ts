import { Task } from "../../domain/Task";
import { TaskRepository } from "../../domain/TaskRepository";
import { AppDataSource } from "./TypeORM/config";
import { TaskStatus } from "../../domain/Task";
import { Repository } from "typeorm";

export class SQLiteTaskRepository implements TaskRepository {
  private repository: Repository<Task> = AppDataSource.getRepository("tasks");

  async findAll(): Promise<Task[]> {
    return await this.repository.find();
  }

  async findById({ id }: { id: string }): Promise<Task> {
    const taskEntity = await this.repository.findOne({
      where: { id },
    });

    if (!taskEntity) {
      throw new Error("Task not found");
    }

    return {
      id: taskEntity.id,
      title: taskEntity.title,
      description: taskEntity.description,
      status: taskEntity.status,
      createdAt: taskEntity.createdAt,
      updatedAt: taskEntity.updatedAt,
    };
  }

  async save(task: Task): Promise<Task> {
    const taskSaved = await this.repository.save(task);
    return taskSaved;
  }

  async updateStatusById({
    id,
  }: {
    id: string;
  }): Promise<{ id: string; status: TaskStatus }> {
    const taskEntity = await this.repository.findOne({ where: { id } });

    if (!taskEntity) {
      throw new Error("Task not found");
    }

    taskEntity.status =
      taskEntity.status === TaskStatus.PENDING
        ? TaskStatus.COMPLETED
        : TaskStatus.PENDING;

    const taskSaved = await this.repository.save(taskEntity);

    return { id: taskSaved?.id?.toString() || "", status: taskSaved.status };
  }
  async deleteById({ id }: { id: string }): Promise<void> {
    await this.repository.delete({ id });
  }
}
