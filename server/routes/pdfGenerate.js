import express from "express";
import multer from "multer";
import { readFile, unlink } from "fs/promises";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { generateStudyPack } from "../services/geminiService.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    // Read uploaded PDF
    const pdfBuffer = await readFile(req.file.path);

    // Load PDF
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(pdfBuffer),
    });

    const pdf = await loadingTask.promise;

    let extractedText = "";

    // Read every page
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const textContent = await page.getTextContent();

      extractedText += textContent.items
        .map((item) => item.str)
        .join(" ");

      extractedText += "\n";
    }

    if (!extractedText.trim()) {
      await unlink(req.file.path);

      return res.status(400).json({
        success: false,
        message: "No text found in PDF.",
      });
    }

    console.log("Extracted text:");
    console.log(extractedText.substring(0, 300));

    const studyPack = await generateStudyPack(extractedText);

    await unlink(req.file.path);

    res.json({
      success: true,
      data: studyPack,
    });

  } catch (error) {
    console.error(error);

    if (req.file) {
      try {
        await unlink(req.file.path);
      } catch {}
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;