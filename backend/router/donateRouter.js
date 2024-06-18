import express from "express";
import { postDonate } from "../controllers/DonateController.js";

const router = express.Router();

router.post("/send", postDonate);

export default router;