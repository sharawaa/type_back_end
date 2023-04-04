import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { collection: "movies" });

const theaterModel = mongoose.model("TheaterModel", schema, "movies");

export default theaterModel;
