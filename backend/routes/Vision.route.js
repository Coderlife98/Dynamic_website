import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { addVision, getVision } from "../Controller/Vision.controller.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addVision,
);

router.get("/get", getVision);

export default router;
