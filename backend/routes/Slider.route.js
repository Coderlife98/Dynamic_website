import express from "express";
import {deleteSliderById, 
  createSlider,
  getSlider,
  getSliderById,
} from "../Controller/Slider.controller.js";
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

router.get("/get/:id", getSliderById);

router.delete("/delete/:id", deleteSliderById);

export default router;
