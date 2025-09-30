import { Router, Request, Response } from "express";
import { io } from "../server";

import { validateCreatedTask } from "./middlewares/validators/task";

import { SQLiteTaskRepository } from "../../Tasks/framework/Database/SQLiteTaskRepository";
import { Creator } from "../../Tasks/application/Creator";
import { Updater } from "../../Tasks/application/Updater";
import { FinderAll } from "../../Tasks/application/Finder/FinderAll";
import { FinderById } from "../../Tasks/application/Finder/FinderById";
import { Deleter } from "../../Tasks/application/Deleter";

const router = Router();

const taskRepository = new SQLiteTaskRepository();

const creator = new Creator(taskRepository);
const updater = new Updater(taskRepository);
const finderAll = new FinderAll(taskRepository);
const finderById = new FinderById(taskRepository);
const deleter = new Deleter(taskRepository);

router.post(
  "",
  validateCreatedTask,
  async (request: Request, response: Response) => {
    try {
      const { title, description } = request.body;

      const { task, error } = await creator.execute({ title, description });

      if (error) {
        console.log("[Error CREATE TASK]: ", error);

        return response.status(500).json({
          ok: false,
          error: `Error al crear la tarea, intente mas tarde`,
        });
      }

      io.emit("taskCreated", task);

      return response.status(201).json({ ok: true, task });
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ ok: false, error: "Error al crear la tarea" });
    }
  }
);

router.patch("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const { taskUpdatedInfo, error } = await updater.execute({ id });

    if (error) {
      return response.status(404).json({
        ok: false,
        error,
      });
    }

    io.emit("taskUpdated", taskUpdatedInfo);

    return response.status(200).json({ ok: true, task: taskUpdatedInfo });
  } catch (error) {
    response.status(500).json({ ok: false, error: "Internal server error" });
  }
});

router.get("", async (request: Request, response: Response) => {
  try {
    const { tasks, error } = await finderAll.execute();

    if (error) {
      return response.status(400).json({
        ok: false,
        error,
      });
    }

    return response.status(200).json({ ok: true, tasks });
  } catch (error) {
    console.log(error);
    response.status(500).json({ ok: false, error: "Internal server error" });
  }
});

router.get("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const { task, error } = await finderById.execute({ id });

    if (error) {
      return response.status(404).json({ ok: false, error });
    }

    return response.status(200).json({ ok: true, task });
  } catch (error) {
    console.log(error);
    response.status(500).json({ ok: false, error: "Internal server error" });
  }
});

router.delete("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const { taskDeletedInfo, error } = await deleter.execute({ id });

    if (error) {
      return response.status(404).json({ ok: false, error });
    }

    io.emit("taskDeleted", taskDeletedInfo);

    return response.status(200).json({ ok: true, task: taskDeletedInfo });
  } catch (error) {
    console.log(error);
    response.status(500).json({ ok: false, error: "Internal server error" });
  }
});

export default router;
