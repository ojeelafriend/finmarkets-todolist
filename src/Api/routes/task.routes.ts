import { Router, Request, Response } from "express";
import { io } from "../server";

import {
  validateCreatedTask,
  validateUpdatedTaskStatus,
} from "./middlewares/validators/task";

import { SQLiteTaskRepository } from "../../Tasks/framework/Database/SQLiteTaskRepository";
import { Creator } from "../../Tasks/application/Creator";

const router = Router();

const taskRepository = new SQLiteTaskRepository();
const creator = new Creator(taskRepository);

router.post(
  "",
  validateCreatedTask,
  async (request: Request, response: Response) => {
    try {
      const { title, description } = request.body;

      const { task, error } = await creator.execute({ title, description });

      if (error) {
        console.log("[Error CREATE TASK]: ", error);

        return response.status(400).json({
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
        .json({ ok: false, message: "Internal server error" });
    }
  }
);

router.patch(
  "/status/:id",
  validateUpdatedTaskStatus,
  (request: Request, response: Response) => {
    try {
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Internal server error" });
    }
  }
);

router.get("", (request: Request, response: Response) => {
  try {
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", (request: Request, response: Response) => {
  try {
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", (request: Request, response: Response) => {
  try {
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

export default router;
