import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const test = process.env.MONGOOSE_CONNECT_KEY;

mongoose
  .connect(`${test}`)
  .then((res) => {
    console.log("connect");
  })
  .catch((err) => {
    console.error(err);
  });
export default mongoose.connection;
