const API_URL = "http://localhost:5001/api";

export async function generateStudyPack(notes) {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ notes }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate study pack");
  }

  return response.json();
}

// NEW FUNCTION
export async function uploadPDF(pdfFile) {
  const formData = new FormData();

  formData.append("pdf", pdfFile);

  const response = await fetch(`${API_URL}/generate/pdf`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload PDF");
  }

  return response.json();
}