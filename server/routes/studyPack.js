import express from "express";
import {
  saveStudyPack,
  getStudyPacks,
} from "../controllers/studyPackController.js";


const router = express.Router();

// Save a study pack
router.post("/", saveStudyPack);

// Get all study packs for the logged-in user
router.get("/", getStudyPacks);

export default router;