import { SQLiteTaskRepository } from "../../../src/Tasks/framework/Database/SQLiteTaskRepository";
import { allTask, task, taskUpdated } from "../../../src/Mooc/Task";
import { AppDataSource } from "../../../src/Tasks/framework/Database/TypeORM/config";
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const taskRepository = new SQLiteTaskRepository();

describe("Integration Test (SQLiteTaskRepository)", () => {
  beforeAll(async () => {
    await AppDataSource.initialize();

    for (const task of allTask) {
      await taskRepository.save(task);
    }
  });

  it("Deberia retornar todas las tareas", async () => {
    expect(await taskRepository.findAll()).toEqual(allTask);
  });

  it("Deberia persistir una tarea", async () => {
    const taskResult = await taskRepository.save(task);

    expect(taskResult).toEqual(task);

    expect(await taskRepository.findById({ id: task.id! })).toEqual(task);
  });

  it("Deberia retornar una tarea por id", async () => {
    const taskResult = await taskRepository.findById({ id: task.id! });
    expect(taskResult).toEqual(task);
  });

  it("Deberia lanzar un error si la tarea no existe: findById, updateStatusById, deleteById", async () => {
    await expect(taskRepository.findById({ id: "unknown" })).rejects.toThrow(
      "Task not found"
    );

    await expect(
      taskRepository.updateStatusById({ id: "unknown" })
    ).rejects.toThrow("Task not found");

    await expect(taskRepository.deleteById({ id: "unknown" })).rejects.toThrow(
      "Task not found"
    );
  });

  it("Deberia actualizar el estado de una tarea", async () => {
    const taskResult = await taskRepository.updateStatusById({ id: task.id! });
    expect(taskResult).toEqual({
      id: taskUpdated.id,
      status: taskUpdated.status,
    });
  });

  it("Deberia eliminar una tarea", async () => {
    await taskRepository.deleteById({ id: task.id! });

    expect(await taskRepository.findAll()).not.toContain(task);
  });

  afterAll(async () => {
    const dbPath = path.resolve(__dirname, "../../../test.sqlite");
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
  });
});
