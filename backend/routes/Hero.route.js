import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { AddHero, getHero } from "../Controller/Hero.controller.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  AddHero,
);

router.get("/get", getHero);

export default router;
