import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateStudyPack, uploadPDF } from "../services/api";
import PDFUploader from "./PDFUploader";
import api from "../api/axios";

function TextInput() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async () => {
    if (!notes.trim() && !pdfFile) {
  alert("Please enter notes or upload a PDF.");
  return;
}

    try {
      setLoading(true);
       

      let response;

if (pdfFile) {
  response = await uploadPDF(pdfFile);
  

await api.post("/studypacks", {
  title: pdfFile.name,
  summary: response.summary,
  flashcards: response.flashcards,
  quiz: response.quiz,
});

navigate("/dashboard", {
  state: {
    studyPack: response,
  },
});

setPdfFile(null);

} else {
  response = await generateStudyPack(notes);

await api.post("/studypacks", {
  title: "Study Pack",
  summary: response.summary,
  flashcards: response.flashcards,
  quiz: response.quiz,
});

navigate("/dashboard", {
  state: {
    studyPack: response,
  },
});
}
    } catch (error) {
  console.error("Full error:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Response:", error.response.data);
  }

  alert("Failed to generate study pack.");
}
  };

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="bg-white rounded-[32px] shadow-2xl border border-gray-200 p-6">
        <PDFUploader onFileSelect={setPdfFile} />

{pdfFile && (
  <p className="mt-4 mb-4 text-green-600 font-medium">
    📄 Selected: {pdfFile.name}
  </p>
)}

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your study notes here..."
          className="w-full h-64 resize-none outline-none text-lg text-gray-700"
        />

        <div className="mt-6 flex items-center justify-between">

          <p className="text-gray-400">
            Supports notes, PDFs, textbooks and lecture content
          </p>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              hover:scale-105
              transition
              shadow-lg
              disabled:opacity-50
              disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "✨ Generate Study Pack"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default TextInput;