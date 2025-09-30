import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./TaskEntity";
import dotenv from "dotenv";

dotenv.config();

const database =
  process.env.NODE_ENV === "production"
    ? "data/tasks.sqlite"
    : process.env.NODE_ENV === "development"
    ? "tasks.sqlite"
    : process.env.NODE_ENV === "test"
    ? "test.sqlite"
    : "tasks.sqlite";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database,
  entities: [Task],
  synchronize: true,
  logging: false,
});
