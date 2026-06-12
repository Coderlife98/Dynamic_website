import express from "express";
import { addFaq } from "../Controller/Faq.controller.js";
const router = express.Router();

router.post("/add", addFaq);

export default router;
