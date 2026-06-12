import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { addGallery } from "../Controller/Gallery.controller.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addGallery,
);

export default router;
