import { Deleter } from "../../../src/Tasks/application/Deleter";
import { MoocTaskRepository } from "../../../src/Mooc/MoocTaskRepository";

import { task as taskMooc } from "../../../src/Mooc/Task";

const taskRepository = new MoocTaskRepository();
const deleter = new Deleter(taskRepository);

describe("Deleter Unit Test:", () => {
  it("Deberia eliminar una tarea y devolver la tarea eliminada y null en error", async () => {
    const result = await deleter.execute({
      id: taskMooc.id!,
    });

    expect(result).toStrictEqual({
      taskDeletedInfo: {
        id: taskMooc.id!,
      },
      error: null,
    });
  });

  it("Deberia devolver null en taskDeletedInfo y el error Task not found", async () => {
    const result = await deleter.execute({
      id: "unknown",
    });

    expect(result).toStrictEqual({
      taskDeletedInfo: null,
      error: "Task not found",
    });
  });
});
