import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import menuRoutes from "./routes/Menu.route.js";
import dotenv from "dotenv";
import userRoute from "./routes/Auth.route.js";
import sliderRoutes from "./routes/Slider.route.js";
import galleryRoutes from "./routes/Gallery.route.js";
import teamRoutes from "./routes/Team.route.js";
import blogRoute from "./routes/Blog.route.js";
import newsRoute from "./routes/News.route.js";
import faqRoute from "./routes/Faq.route.js";
import company from "./routes/Company.route.js";
import HeroRoute from "./routes/Hero.route.js";
import AboutRoute from "./routes/About.route.js";
import BackgroundRoute from "./routes/Background.route.js";
import testimonialRoute from "./routes/Testimonial.route.js";
import ContactRoute from "./routes/Contact.route.js";
import MissionRoute from "./routes/Mission.route.js";
import { dbConfig } from "./config/dbconfig.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());

// +++++++++++++++++++++++++++++++++ ACCESS ROUTE START +++++++++++++++++++++++++++++++++++++++ //
app.use("/api/menu", menuRoutes);
app.use("/api/auth", userRoute);
app.use("/api/slider", sliderRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/blog", blogRoute);
app.use("/api/news", newsRoute);
app.use("/api/faq", faqRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/company", company);
app.use("/api/hero", HeroRoute);
app.use("/api/about", AboutRoute);
app.use("/api/background", BackgroundRoute);
app.use("/api/contact", ContactRoute);
app.use("/api/mission", MissionRoute);
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
