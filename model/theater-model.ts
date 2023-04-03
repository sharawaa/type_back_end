import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { collection: "theaters" });

const theaterModel = mongoose.model("TheaterModel", schema, "theaters");

export default theaterModel;
