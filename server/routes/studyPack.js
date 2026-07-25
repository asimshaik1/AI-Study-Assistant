import express from "express";
import {
  saveStudyPack,
  getStudyPacks,
} from "../controllers/studyPackController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Save a study pack
router.post("/", authMiddleware, saveStudyPack);

// Get all study packs for the logged-in user
router.get("/", authMiddleware, getStudyPacks);

export default router;