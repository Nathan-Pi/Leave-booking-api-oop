import { Server } from "./Server";
import { Router } from "express";
import { AppDataSource } from "./data-source";
import { RoleRouter } from "./routes/RoleRouter";
import { RoleController } from "./controllers/RoleController";
import { UserRouter } from "./routes/UserRouter";
import { UserController } from "./controllers/UserController";
import { LoginRouter } from "./routes/LoginRouter";
import { LoginController } from "./controllers/LoginController";

const DEFAULT_PORT = 8900;
const port = process.env.SERVER_PORT || DEFAULT_PORT;
if (!process.env.SERVER_PORT) {
  console.log(
    "PORT environment variable is not set, defaulting to " + DEFAULT_PORT
  );
}
const appDataSource = AppDataSource;

const loginRouter = new LoginRouter(Router(), new LoginController());
const roleRouter = new RoleRouter(Router(), new RoleController());
const userRouter = new UserRouter(Router(), new UserController());

const server = new Server(
  port,
  loginRouter,
  roleRouter,
  userRouter,
  appDataSource
);
server.start();
