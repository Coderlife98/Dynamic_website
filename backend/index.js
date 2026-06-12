import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import menuRoutes from "./routes/Menu.route.js";
import dotenv from "dotenv";
import userRoute from "./routes/Auth.route.js";
import sliderRoutes from "./routes/Slider.route.js";
import galleryRoutes from "./routes/Gallery.route.js";
import teamRoutes from "./routes/Team.route.js";
import blogRoute from "./routes/Blog.route.js";
import newsRoute from "./routes/News.route.js";
import { dbConfig } from "./config/dbconfig.js";

dotenv.config();
const app = express();

app.use(express.json());

// +++++++++++++++++++++++++++++++++ ACCESS ROUTE START +++++++++++++++++++++++++++++++++++++++ //
app.use("/api/menu", menuRoutes);
app.use("/api/auth", userRoute);
app.use("/api/slider", sliderRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/blog", blogRoute);
app.use("/api/news", newsRoute);
// +++++++++++++++++++++++++++++++++ ACCESS ROUTE END +++++++++++++++++++++++++++++++++++++++ //

// +++++++++++++++++++++++++++++++++ Define PORT  Start +++++++++++++++++++++++++++++++++++++++ //
const PORT = process.env.PORT || 3000;
// +++++++++++++++++++++++++++++++++ Define PORT End ++++++++++++++++++++++++++++++++++++++++++ //

// +++++++++++++++++++++++++++++++++ lISTEN PORT START ++++++++++++++++++++++++++++++++++++++++++ //
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
  dbConfig();
});
// +++++++++++++++++++++++++++++++++ lISTEN PORT END ++++++++++++++++++++++++++++++++++++++++++++ //
