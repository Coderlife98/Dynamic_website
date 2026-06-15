import express from "express";
import {
  updateCompany,
} from "../Controller/Company.controller.js";
const router = express.Router();

router.patch("/basic_detail", updateCompany);

export default router;
