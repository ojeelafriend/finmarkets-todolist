import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./TaskEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "tasks.sqlite",
  entities: [Task],
  synchronize: true,
  logging: false,
});
