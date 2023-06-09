import express, { Request, Response } from "express";
import { request } from "http";
import movieModel from "../model/theater-model";

const moviesRouter = express.Router();

moviesRouter.get("/movies", async (req: Request, res: Response) => {
  const result = await movieModel
    .find({ poster: { $exists: 1 } })
    .select({ title: 1, poster: 1, _id: 1 })
    .limit(10);
  res.status(200).send(result);
});

moviesRouter.get(`/movie/:id`, async (request: Request, response: Response) => {
  const result = await movieModel.findOne({ _id: `${request.params.id}` });
  response.status(200).send(result);
});

moviesRouter.get(
  `/search/:id`,
  async (request: Request, response: Response) => {
    const search = request.params.id;
    const result = await movieModel
      .find({ id: { $regex: search } })
      .select({ title: 1, poster: 1 })
      .limit(10);
    response.status(200).send(result);
    console.log(result);
  }
);

// moviesRouter.get("/search:id",async (request:Request, response:Response)=>{
//   const result = await movieModel.find({}).select({_id:1}).limit(10000)
//   response.status(200).send(result)
// })

export default moviesRouter;
