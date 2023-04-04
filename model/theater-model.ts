import mongoose from "mongoose";

const schema = new mongoose.Schema({plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: Object,
    lastupdated: String,
    year: Number,
    imdb: Object,
    countries: [String],
    type: String,
    tomatoes: Object,}, { collection: "movies" });

const movieModel = mongoose.model("movieModel", schema, "movies");

export default movieModel;
