import express, { Request, Response } from "express";
import theaterModel from "../model/theater-model";

const theaterRouter = express.Router();

theaterRouter.get("/theater", async (req: Request, res: Response) => {
  const result = await theaterModel.find({}).limit(10);
  res.status(200).send(result);
});

export default theaterRouter;
