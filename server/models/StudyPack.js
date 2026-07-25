import mongoose from "mongoose";

const studyPackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

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