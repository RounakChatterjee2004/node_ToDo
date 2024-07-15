import express from "express";

import { config } from "dotenv";

import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";

import taskRouter from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
config({
  path: "./data/config.env",
});
const app = express();

//using Middleares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// using error middleware whenveer nexr(err) is called this will get executed

// using router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);
app.use(errorMiddleware);

export { app };
