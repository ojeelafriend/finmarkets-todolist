import { Updater } from "../../../src/Tasks/application/Updater";
import { MoocTaskRepository } from "../../../src/Mooc/MoocTaskRepository";

import {
  taskUpdated as taskUpdatedMooc,
  task as taskMooc,
} from "../../../src/Mooc/Task";

const taskRepository = new MoocTaskRepository();
const updater = new Updater(taskRepository);

describe("Updater Unit Test:", () => {
  it("Deberia actualizar el estado de una tarea y devolver la tarea actualizada y null en error", async () => {
    const result = await updater.execute({
      id: taskMooc.id!,
    });

    expect(result).toStrictEqual({
      taskUpdatedInfo: {
        id: taskUpdatedMooc.id!,
        status: taskUpdatedMooc.status,
      },
      error: null,
    });
  });

  it("Deberia devolver null en taskUpdatedInfo y el error Task not found", async () => {
    const result = await updater.execute({
      id: "unknown",
    });

    expect(result).toStrictEqual({
      taskUpdatedInfo: null,
      error: "Task not found",
    });
  });
});
