import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role } from "./entity/Role";
import { User } from "./entity/User";
import * as dotenv from "dotenv";
import { LeaveRequest } from "./entity/LeaveRequest";

const envPath = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envPath });

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [Role, User, LeaveRequest],
});
