import { FinderAll } from "../../../../src/Tasks/application/Finder/FinderAll";
import { MoocTaskRepository } from "../../../../src/Mooc/MoocTaskRepository";

import { allTask as allTaskMooc } from "../../../../src/Mooc/Task";

const taskRepository = new MoocTaskRepository();
const finderAll = new FinderAll(taskRepository);

describe("FinderAll Unit Test:", () => {
  it("Deberia devolver todas las tareas encontradas y null en error", async () => {
    const taskResult = await finderAll.execute();

    expect(taskResult).toStrictEqual({
      tasks: allTaskMooc,
      error: null,
    });
  });
});
