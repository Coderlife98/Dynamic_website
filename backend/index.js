import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import menuRoutes from "./routes/Menu.route.js";
import userRoute from "./routes/Auth.route.js";
import { dbConfig } from "./config/dbconfig.js";
configDotenv();
const app = express();

app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/auth", userRoute);

app.listen(5000, () => {
  console.log(`Server Running`);
  dbConfig();
});
