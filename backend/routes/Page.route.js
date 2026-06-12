import express from "express";
const router = express.Router();

router.get("/", getMenu);
router.post("/create", createMenu);
   
export default router;
