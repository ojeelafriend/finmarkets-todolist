import { Task } from "../../domain/Task";
import { TaskRepository } from "../../domain/TaskRepository";
import { AppDataSource } from "./TypeORM/config";
import { TaskStatus } from "../../domain/Task";
import { Repository } from "typeorm";

export class SQLiteTaskRepository implements TaskRepository {
  private repository: Repository<Task> = AppDataSource.getRepository("tasks");

  async findAll(): Promise<Task[]> {
    // const tasks = await this.repository.find();

    // return tasks.map((task) => ({
    //   id: task.id.toString(),
    //   title: task.title,
    //   description: task.description,
    //   status: task.status,
    //   createdAt: task.createdAt,
    //   updatedAt: task.updatedAt,
    // }));
    return [];
  }
  async findById({ id }: { id: string }): Promise<Task> {
    // const taskEntity = await this.repository.findOne({
    //   where: { id: parseInt(id) },
    // });

    // if (!taskEntity) {
    //   throw new Error("Task not found");
    // }

    // return {
    //   id: taskEntity.id.toString(),
    //   title: taskEntity.title,
    //   description: taskEntity.description,
    //   status: taskEntity.status,
    //   createdAt: taskEntity.createdAt,
    //   updatedAt: taskEntity.updatedAt,
    // };
    return {
      id: "",
      title: "",
      description: "",
      status: TaskStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async save(task: Task): Promise<Task> {
    const taskSaved = await this.repository.save(task);
    return taskSaved;
  }

  async updateStatusById({ id }: { id: string }): Promise<void> {
    // const taskEntity = await this.repository.findOne({
    //   where: { id: parseInt(id) },
    // });
    // if (!taskEntity) {
    //   throw new Error("Task not found");
    // }
    // taskEntity.status = TaskStatus.COMPLETED;
    // await this.repository.save(taskEntity);
  }
  async deleteById({ id }: { id: string }): Promise<void> {
    await this.repository.delete(parseInt(id));
  }
}
