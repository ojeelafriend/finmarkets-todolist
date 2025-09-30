import { FinderById } from "../../../../src/Tasks/application/Finder/FinderById";
import { MoocTaskRepository } from "../../../../src/Mooc/MoocTaskRepository";

import { task as taskMooc } from "../../../../src/Mooc/Task";

const taskRepository = new MoocTaskRepository();
const finderById = new FinderById(taskRepository);

describe("FinderById Unit Test:", () => {
  it("Deberia devolver la tarea encontrada y null en error", async () => {
    const taskResult = await finderById.execute({ id: taskMooc.id! });

    expect(taskResult).toStrictEqual({
      task: taskMooc,
      error: null,
    });
  });

  it("Deberia devolver null en task y el error Task not found", async () => {
    const taskResult = await finderById.execute({ id: "unknown" });

    expect(taskResult).toStrictEqual({
      task: null,
      error: "Task not found",
    });
  });
});
