import "./database";
import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(7777, () => console.log("server is running!"));