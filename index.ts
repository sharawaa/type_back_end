import express, { Express, Request, Response } from "express";
import "./config/mongoose";
import dotenv from "dotenv";
import cors from "cors";
import moviesRouter from "./controller/movies -api";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(moviesRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
