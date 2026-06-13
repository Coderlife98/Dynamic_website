import express from "express";
import { createSlider, getSlider } from "../Controller/Slider.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  createSlider,
);

router.get("/get", getSlider);

export default router;
