import { createServer } from "http";
import { Server as SocketServer } from "socket.io";

import app from "./express";
import routes from "./routes/index.routes";
import { AppDataSource } from "../Tasks/framework/Database/TypeORM/config";

const PORT = process.env.PORT || 3030;

const httpServer = createServer(app);

const io = new SocketServer(httpServer, {
  cors: { origin: process.env.CLIENT_URL || "*" },
  path: "/api/socket.io",
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

routes(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
  AppDataSource.initialize()
    .then(() => {
      console.log("Database connected 🚀");
    })
    .catch((error) => {
      console.log("Error connecting to database 🚨", error);
    });
});

export { io };
