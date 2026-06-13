import express from "express";
import { addBlog, getBlog } from "../Controller/Blog.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addBlog,
);

router.get("/get", getBlog);

export default router;
