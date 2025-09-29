import { Express } from "express";

import taskRoutes from "./task.routes";

const routes = (server: Express) => {
  server.use("/task", taskRoutes);
};

export default routes;
