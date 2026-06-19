import express from "express";
import { addBackground, getBackground } from "../Controller/Background.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addBackground,
);

router.get("/get", getBackground);
export default router;
