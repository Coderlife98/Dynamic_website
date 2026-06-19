import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { addMission } from "../Controller/Mission.controller.js";
const router = express.Router();

router.post("/:folder/add", upload.single("image"), uploadErrorHandler, addMission);

export default router;
