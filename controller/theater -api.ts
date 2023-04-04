import express, { Request, Response } from "express";
import movieModel from "../model/theater-model";

const theaterRouter = express.Router();

theaterRouter.get("/movie", async (req: Request, res: Response) => {
  const result = await movieModel.find({}).limit(10);
  res.status(200).send(result);
});

export default theaterRouter;
