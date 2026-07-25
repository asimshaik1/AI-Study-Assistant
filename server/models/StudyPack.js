import mongoose from "mongoose";

const studyPackSchema = new mongoose.Schema(
  {
    

    title: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    flashcards: [
      {
        question: String,
        answer: String,
      },
    ],

    quiz: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("StudyPack", studyPackSchema);