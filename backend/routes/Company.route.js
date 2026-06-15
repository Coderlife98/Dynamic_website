import express from "express";
import {
  updateDetails,
  updateImages,
} from "../Controller/Company.controller.js";
const router = express.Router();

router.patch("/basic_detail", updateDetails);
router.patch("/images", updateImages);

export default router;
