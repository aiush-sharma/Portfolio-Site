import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const ConnectDB = async () => {
  const DBURL = process.env.MONGOOSE_URI;
  try {
    const response = await mongoose.connect(DBURL);
    console.log("database connected successfully..");
  } catch (error) {
    console.log("error=", error.message);
  }
};
export default ConnectDB;
