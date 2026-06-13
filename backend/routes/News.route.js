import express from "express";
import { addNews, getNews } from "../Controller/News.controller.js";
const router = express.Router();

router.post("/add", addNews);
router.post("get", getNews);

export default router;
