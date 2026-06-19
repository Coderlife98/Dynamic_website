import express from "express";
import {
  addContact,
  deleteEnquiryById,
  getContact,
} from "../Controller/Contact.controller.js";
const router = express.Router();

router.post("/add", addContact);
router.post("/get", getContact);
router.delete("/delete/:id", deleteEnquiryById);
export default router;
