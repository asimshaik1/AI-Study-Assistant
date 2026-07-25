import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Brain, ChartNoAxesColumn } from "lucide-react";

import TabButton from "../components/TabButton";
import Flashcard from "../components/Flashcard";
import QuizCard from "../components/QuizCard";

function Dashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("summary");
  const [score, setScore] = useState(0);
  const [quizKey, setQuizKey] = useState(0);

  const studyPack = state?.studyPack;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  if (!studyPack) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <h1 className="text-3xl font-bold">
            No Study Pack Found
          </h1>

          <p className="mt-3 text-gray-500">
            Generate a study pack first.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            ← Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl font-black text-gray-900">
              Your AI Study Pack
            </h1>

            <p className="mt-3 text-gray-500">
              Generated using Gemini AI
            </p>
          </div>
        </div>

        {/* Tabs */}

        <div className="flex flex-wrap gap-4 mt-10">

          <TabButton
            title="Summary"
            icon={<BookOpen size={18} />}
            active={activeTab === "summary"}
            onClick={() => setActiveTab("summary")}
          />

          <TabButton
            title="Flashcards"
            icon={<Brain size={18} />}
            active={activeTab === "flashcards"}
            onClick={() => setActiveTab("flashcards")}
          />

          <TabButton
            title="Quiz"
            icon={<ChartNoAxesColumn size={18} />}
            active={activeTab === "quiz"}
            onClick={() => setActiveTab("quiz")}
          />

        </div>

        {/* CONTENT */}

        <div className="mt-10">

          {/* SUMMARY */}

          {activeTab === "summary" && (

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <BookOpen
                className="text-indigo-600"
                size={36}
              />

              <h2 className="text-3xl font-bold mt-5">
                Summary
              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                {studyPack.summary}
              </p>

            </div>

          )}

          {/* FLASHCARDS */}

          {activeTab === "flashcards" && (

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Brain
                className="text-indigo-600"
                size={36}
              />

              <h2 className="text-3xl font-bold mt-5">
                Flashcards
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                {studyPack.flashcards.map((card, index) => (

                  <Flashcard
                    key={index}
                    question={card.question}
                    answer={card.answer}
                  />

                ))}

              </div>

            </div>

          )}

          {/* QUIZ */}

          {activeTab === "quiz" && (

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <ChartNoAxesColumn
                className="text-indigo-600"
                size={36}
              />

              <h2 className="text-3xl font-bold mt-5">
                Quiz
              </h2>
              <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
  <div
    className="bg-indigo-600 h-4 rounded-full transition-all"
    style={{
      width: `${(score / studyPack.quiz.length) * 100}%`,
    }}
  />
</div>

              <div className="mt-8 mb-8 bg-indigo-100 rounded-2xl p-5">

                <h3 className="text-xl font-bold text-indigo-700">
                  Score: {score} / {studyPack.quiz.length}
                </h3>

              </div>

              <div className="space-y-8">
                

                {studyPack.quiz.map((question, index) => (
                

                  <QuizCard
  key={`${quizKey}-${index}`}
  question={question}
  index={index}
  onAnswer={handleAnswer}
/>

                ))}

              </div>
              <div className="mt-10 text-center">

  <button
    onClick={() => {
  setScore(0);
  setQuizKey((prev) => prev + 1);
}}  
    className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700"
  >
    Restart Quiz
  </button>

</div>

            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;