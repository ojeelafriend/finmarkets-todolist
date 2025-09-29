import { Server } from "socket.io";
import { type Server as HttpServer } from "http";

const CLIENT_URL = process.env.CLIENT_URL;

const webSocketInit = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: CLIENT_URL || "*" },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
  });

  return io;
};

export default webSocketInit;
