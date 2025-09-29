import express from "express";
import cors from "cors";
import morgan from "morgan";

const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

app.use(express.json(), express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(cors({ origin: CLIENT_URL || "*" }));

export default app;
