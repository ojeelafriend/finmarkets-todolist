import { TaskStatus } from "../Tasks/domain/Task";
import { Task } from "../Tasks/domain/Task";

export const task: Task = {
  id: "7",
  title: "Task 7",
  description: "Description 1",
  status: TaskStatus.PENDING,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const taskUpdated: Task = {
  id: "7",
  title: "Task 7",
  description: "Description 1",
  status: TaskStatus.COMPLETED,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const allTask: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    status: TaskStatus.PENDING,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    status: TaskStatus.COMPLETED,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 3",
    status: TaskStatus.PENDING,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
