import express from "express";
const router = express.Router();
import { addTeam } from "../Controller/Team.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addTeam,
);
export default router;
