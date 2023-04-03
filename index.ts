import express, { Express, Request, Response } from "express";
import "./config/mongoose";
import dotenv from "dotenv";
import theaterRouter from "./controller/theater -api";
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(theaterRouter);
app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});