import express from "express";
import { addBackground } from "../Controller/Background.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post("/add", upload.single("image"), uploadErrorHandler, addBackground);

export default router;
