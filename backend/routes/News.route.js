import express from "express";
import { addNews } from "../Controller/News.controller.js";
const router = express.Router();

router.post("/add", addNews);

export default router;
