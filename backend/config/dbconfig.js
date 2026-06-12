import mongoose from "mongoose";

export const dbConfig = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Database");
  } catch (error) {
    console.log(error.message);
  }
};
