import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
console.log("Gemini key loaded:", !!process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateStudyPack(notes) {
  const prompt = `
You are an AI Study Assistant.

Return ONLY valid JSON.

The response MUST follow this schema exactly.

{
  "summary": "short summary",
  "flashcards": [
    {
      "question": "Question",
      "answer": "Answer"
    }
  ],
  "quiz": [
    {
      "question": "Question",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correctAnswer": "The FULL TEXT of the correct option exactly as it appears in options."
    }
  ]
}

Rules:
- Generate exactly 3 quiz questions.
- Generate exactly 4 options per question.
- The value of correctAnswer MUST be IDENTICAL to one of the strings in options.
- Do NOT return option letters like A, B, C, or D.
- Do NOT wrap the JSON in markdown.

Study Notes:

${notes}
`;

const response = await ai.models.generateContent({
  model: "gemini-flash-latest",
  contents: prompt,
});

const text = response.text;

// Remove markdown code fences if Gemini returns them
const cleaned = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleaned);
}