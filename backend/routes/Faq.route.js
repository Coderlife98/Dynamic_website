import express from "express";
import { addFaq, getFaq } from "../Controller/Faq.controller.js";
const router = express.Router();

router.post("/add", addFaq);
router.get("/get", getFaq);

export default router;
