import mongoose from "mongoose";
import { CONNECTION_STRING } from "../config/index.js";

const connectionString = CONNECTION_STRING;

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(connectionString);
    console.log(`Database connected successfully with ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error occurred ${error.message}`);
  }
};
