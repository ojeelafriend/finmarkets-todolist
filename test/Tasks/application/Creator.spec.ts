import { Creator } from "../../../src/Tasks/application/Creator";
import { MoocTaskRepository } from "../../../src/Mooc/MoocTaskRepository";

import { task } from "../../../src/Mooc/Task";

const taskRepository = new MoocTaskRepository();
const creator = new Creator(taskRepository);

describe("Creator Unit Test:", () => {
  it("Deberia crear una tarea y devolver la tarea creada y null en error", async () => {
    const taskResult = await creator.execute({
      title: "Test",
      description: "Test",
    });

    expect(taskResult).toStrictEqual({
      task: task,
      error: null,
    });
  });
});
