import generateRoute from "./routes/generate.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pdfGenerateRoute from "./routes/pdfGenerate.js";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.js";
import studyPackRoute from "./routes/studyPack.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/generate", generateRoute);
app.use("/api/generate/pdf", pdfGenerateRoute);
app.post("/test", (req, res) => {
  res.json({
    success: true,
    message: "POST is working!",
  });
});
app.use("/api/auth", authRoute);
app.use("/api/studypacks", studyPackRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 AI Study Assistant Backend is running!",
  });
});

const PORT = process.env.PORT || 5001;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

startServer();